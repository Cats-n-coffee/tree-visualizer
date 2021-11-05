import * as React from "react";
import { AppProps } from "../@types/types";

type ThemeContextState = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const contextDefaultValues: ThemeContextState = {
  theme: "",
  setTheme: () => {},
};

const ThemeContext =
  React.createContext<ThemeContextState>(contextDefaultValues);
ThemeContext.displayName = "ThemeContext";

export default function ThemeProvider({ children }: AppProps) {
  const [theme, setTheme] = React.useState(
    () => window.localStorage.getItem("theme") || "light"
  );
  const values = { theme, setTheme };

  React.useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export function useThemeProvider() {
  const theme = React.useContext(ThemeContext);

  if (!theme) {
    throw new Error("useThemeProvider must be used inside ThemeProvider");
  }

  return theme;
}
