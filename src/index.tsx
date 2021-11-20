import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './context/AppProvider';
import './scss/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
