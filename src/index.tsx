import { createTheme, Theme, ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import theme from './theme';
import App from './App';

const root = createRoot(document.querySelector('#root'));

const muiTheme: Theme = createTheme({ ...theme['light'] });

root.render(
  <ThemeProvider theme={muiTheme}>
    <App />
  </ThemeProvider>,
);
