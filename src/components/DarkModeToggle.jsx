import React from 'react';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
