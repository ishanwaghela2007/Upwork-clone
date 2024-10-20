import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

const languages = [
  { value: 'en', label: 'English', symbol: 'A' },
  { value: 'hi', label: 'हिन्दी', symbol: 'अ' }, // Hindi
  { value: 'id', label: 'Indonesian', symbol: 'I' }, // Indonesian
];

export default function WebTranslator() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.onload = () => {
          if (window.google && window.google.translate) {
            resolve();
          } else {
            reject(new Error('Google Translate API not loaded'));
          }
        };
        script.onerror = () => reject(new Error('Failed to load Google Translate script'));
        document.body.appendChild(script);
      });
    };

    loadGoogleTranslateScript()
      .then(() => {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,hi,id', // Include necessary languages
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          }, 'google_translate_element');
        };
      })
      .catch((error) => {
        console.error('Error loading Google Translate:', error);
      });

    return () => {
      const script = document.querySelector('script[src*="translate_a/element.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const translateText = async (text, targetLanguage) => {
    const data = new URLSearchParams(); // Use URLSearchParams for browser environment
    data.append('source_language', 'en');
    data.append('target_language', targetLanguage);
    data.append('text', text);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'x-rapidapi-key': 'c7fd9697f8msh41f4c39db5317e8p18f27cjsnd2da627ace49', // Replace with your RapidAPI key
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded', // Set content type for URL-encoded data
      },
      data: data.toString(), // Convert URLSearchParams to string
    };

    try {
      const response = await axios.request(options);
      console.log(response.data); // Handle the response data as needed
      return response.data; // Return translated text or other data as necessary
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  const changeLanguage = async (lang) => {
    if (lang === 'hi' && !window.confirm("This will lead you to हिंदी language. Are you sure you want to switch?")) {
      return;
    }

    setCurrentLanguage(lang);
    await translatePage(lang);
  };

  const translatePage = async (lang) => {
    const googleFrame = document.querySelector('iframe.goog-te-menu-frame');
    if (googleFrame) {
      const googleFrameDoc = googleFrame.contentDocument || googleFrame.contentWindow?.document;
      const languageSelect = googleFrameDoc?.querySelector('select');
      if (languageSelect) {
        languageSelect.value = lang;
        languageSelect.dispatchEvent(new Event('change'));
      }
    }

    // Optionally translate specific text using the API
    const translatedText = await translateText('What is your name?', lang);
    console.log('Translated text:', translatedText);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
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
            onClick={() => changeLanguage(currentLanguage === 'en' ? 'hi' : 'en')} // Toggle language
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
              {languages.find((lang) => lang.value === currentLanguage)?.symbol}
            </span>
            {languages.find((lang) => lang.value === currentLanguage)?.label}
          </Button>
        </Box>
      </div>
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
}
