import React, { useState, useEffect } from 'react';
import { 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  ThemeProvider, 
  createTheme, 
  CssBaseline 
} from '@mui/material';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'it', label: 'Italiano' },
  { value: 'ja', label: '日本語' },
  { value: 'ko', label: '한국어' },
  { value: 'zh-CN', label: '中文 (简体)' },
];
const LanguageChanger = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: languages.map(lang => lang.value).join(','),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    return () => {
      // Clean up the script
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  useEffect(() => {
    const changeLanguage = () => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = language;
        select.dispatchEvent(new Event('change'));
      }
    };

    if (window.google && window.google.translate) {
      changeLanguage();
    }
  }, [language]);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <FormControl variant="outlined" style={{ minWidth: 200 }}>
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            onChange={handleChange}
            label="Language"
          >
            {languages.map((lang) => (
              <MenuItem key={lang.value} value={lang.value}>
                {lang.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      <div id="google_translate_element" style={{ display: 'block', zIndex: 999 }}></div>

      </div>
    </ThemeProvider>
  );
};

export default LanguageChanger;
