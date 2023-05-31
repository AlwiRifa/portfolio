import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeProvider';

function Tes() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className={`flex items-center justify-between p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="logo">Logo</div>
      <div className={`toggle ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        <input
          type="checkbox"
          id="toggle-checkbox"
          className="toggle-checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="toggle-checkbox" className="toggle-label">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </label>
      </div>
    </nav>
  );
}

export default Tes;
