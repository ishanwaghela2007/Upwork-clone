import React, { useState, useEffect } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Box } from '@mui/system';

const languages = [
  { value: 'en', label: 'English', symbol: 'A' },
  { value: 'hi', label: 'हिन्दी', symbol: 'अ' },  // Hindi with Devanagari script symbol 
];

export default function WebTranslator() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,mr',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const changeLanguage = (lang) => {
    if (lang === 'hi') {
      const confirmSwitch = window.confirm("This will lead you to हिंदी language. Are you sure you want to switch to this language?");
      if (!confirmSwitch) {
        return;
      }
    }

    setCurrentLanguage(lang);

    const googleFrame = document.getElementsByClassName('goog-te-menu-frame')[0];
    if (googleFrame) {
      const googleFrameDoc = googleFrame.contentDocument || googleFrame.contentWindow?.document;
      if (googleFrameDoc) {
        const languageSelect = googleFrameDoc.getElementsByTagName('table')[0];
        const languageOptions = languageSelect.getElementsByTagName('td');

        for (let i = 0; i < languageOptions.length; i++) {
          if (languageOptions[i].innerHTML.includes(lang)) {
            languageOptions[i].click();
            break;
          }
        }
      }
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        {/* Custom button with symbol and language */}
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '70px',
              padding: '8px',
              backgroundColor: '#333',
              color: '#fff',
            }}
            onClick={() => changeLanguage('hi')}
          >
            <span
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '4px',
                marginRight: '8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {languages.find(lang => lang.value === currentLanguage)?.symbol}
            </span>
            {languages.find(lang => lang.value === currentLanguage)?.label}
          </Button>
        </Box>
      </div>
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
}
