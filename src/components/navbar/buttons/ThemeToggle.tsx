import * as React from "react";
import { useThemeProvider } from "../../../context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeProvider();

  function toggleTheme() {
    console.log("button theme", theme);
    return theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <button
      className={`themeToggle ${theme === "dark" ? "toggle" : null}`}
      onClick={toggleTheme}
      aria-label="theme toggle"
    ></button>
  );
}
