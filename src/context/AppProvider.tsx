import React from 'react';

import ThemeProvider from './ThemeProvider';
import TreeContextProvider from './TreeContext';

const AppProvider: React.FC = ({ children }) => (
  <React.Fragment>
    <ThemeProvider>
      <TreeContextProvider>{children}</TreeContextProvider>
    </ThemeProvider>
  </React.Fragment>
);

export default AppProvider;
