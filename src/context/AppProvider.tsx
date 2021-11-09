import React from "react";

import ThemeProvider from "./ThemeProvider";
import TreeContextProvider from "./TreeContext";

export default function AppProvider({ children }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider>
        <TreeContextProvider>{children}</TreeContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
