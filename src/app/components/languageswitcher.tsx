// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event:any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={handleLanguageChange} defaultValue={i18n.language}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="es">Spainsh</option>
      <option value="es">french</option>
      <option value="es">German</option>
      <option value="es">Urdu</option>
      <option value="es">Hindi</option>
      <option value="es">Arabic</option>
      {/* Add more language options here */}
    </select>
  );
};

export default LanguageSwitcher;
