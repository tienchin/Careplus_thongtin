
import React, { createContext, useState, useContext, useEffect } from 'react';

export const themes = {
  light: {
    backgroundColor: '#f4f7f6',
    textColor: '#333',
    headerColor: '#f8f9fa',
    footerColor: '#343a40',
    primaryColor: '#007bff',
    borderColor: '#e0e0e0',
  },
  dark: {
    backgroundColor: '#1a202c',
    textColor: '#e2e8f0',
    headerColor: '#2d3748',
    footerColor: '#1a202c',
    primaryColor: '#63b3ed',
    borderColor: '#4a5568',
  },
  green: {
    backgroundColor: '#e0f2e9',
    textColor: '#2f855a',
    headerColor: '#c6f6d5',
    primaryColor: '#38a169',
    borderColor: '#9ae6b4',
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  themeName: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('app-theme', themeName);
    document.body.className = `theme-${themeName}`;
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName(prevThemeName => {
      const nextThemeName = (prevThemeName === 'light' ? 'dark' : prevThemeName === 'dark' ? 'green' : 'light');
      return nextThemeName;
    });
  };

  const currentTheme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, themeName: themeName, setTheme: setThemeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};