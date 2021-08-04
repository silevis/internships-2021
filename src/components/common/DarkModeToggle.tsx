import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  // if (!isDarkMode) return null;

  return (
    <div>
      <input
        type="checkbox"
        name="darkModeSwitch"
        id="darkModeSwitch"
        checked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
      />
      <label htmlFor="darkModeSwitch">Dark Mode</label>
    </div>
  );
};

export default DarkModeToggle;
