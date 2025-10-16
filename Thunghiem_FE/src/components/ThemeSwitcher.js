// src/components/ThemeSwitcher.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaLeaf } from 'react-icons/fa';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const { themeName, toggleTheme } = useTheme(); 
  const renderIcon = () => {
    if (themeName === 'light') return <FaSun />;
    if (themeName === 'dark') return <FaMoon />;
    if (themeName === 'green') return <FaLeaf />;
    return <FaSun />;
  };

  const handleClick = () => {
    toggleTheme();
    console.log("Theme toggled. New themeName:", themeName);
  }

  return (
    <div className="theme-switcher" onClick={handleClick}> 
      {renderIcon()}
    </div>
  );
}

export default ThemeSwitcher;