import React, { FC, useEffect, useMemo, useState } from 'react';
import { persist, retrieveFromStore } from './persistentStorageUtils';

interface IThemeContext {
  isDarkMode: boolean;
  setIsDarkMode: (newValue: boolean) => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  isDarkMode: retrieveFromStore('theme') === 'dark',
  setIsDarkMode: () => null,
});

const ThemeProvider: FC = ({ children }) => {
  const [isDarkMode, rawSetIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialDarkMode = root.classList.contains('dark');
    rawSetIsDarkMode(initialDarkMode);
  }, []);

  const contextValue = useMemo(() => {
    const setIsDarkMode = (newValue: boolean) => {
      const root = window.document.documentElement;
      persist('theme', newValue ? 'dark' : 'light');
      root.classList.toggle('dark', newValue);

      rawSetIsDarkMode(newValue);
    };

    return {
      isDarkMode,
      setIsDarkMode,
    };
  }, [isDarkMode, rawSetIsDarkMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
