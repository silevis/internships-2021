import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import SwitchRadiobox from './SwitchRadiobox';

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <div className="w-16">
      <SwitchRadiobox onSwitch={() => setIsDarkMode(!isDarkMode)} initialState={isDarkMode} />
    </div>
  );
};

export default DarkModeToggle;
