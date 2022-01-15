import React from 'react';

import ThemeProvider from './ThemeProvider';
import TreeContextProvider from './TreeContext';
import SelectedNodeProvider from './SelectedNodeContext';

const AppProvider: React.FC = ({ children }) => (
  <React.Fragment>
    <ThemeProvider>
      <TreeContextProvider>
        <SelectedNodeProvider>{children}</SelectedNodeProvider>
      </TreeContextProvider>
    </ThemeProvider>
  </React.Fragment>
);

export default AppProvider;
