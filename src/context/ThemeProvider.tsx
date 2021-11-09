/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';

type ThemeContextState = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const contextDefaultValue: ThemeContextState = {
  theme: '',
  setTheme: () => {},
};

const ThemeContext =
  React.createContext<ThemeContextState>(contextDefaultValue);
ThemeContext.displayName = 'ThemeContext';

export default function ThemeProvider({ children }: AppProps) {
  const [theme, setTheme] = React.useState(
    () => window.localStorage.getItem('theme') || 'light'
  );

  const value = { theme, setTheme };

  React.useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeProvider() {
  const theme = React.useContext(ThemeContext);

  if (!theme) {
    throw new Error('useThemeProvider must be used inside ThemeProvider');
  }

  return theme;
}
