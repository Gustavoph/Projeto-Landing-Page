import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Home from './template/App';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
      <GlobalStyles theme={theme} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
