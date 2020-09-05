import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import './index.scss';

/**
 * Тут Я создаю тему и передаю в настройки объект
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffdd2d',
    },
    secondary: {
      main: '#f5f5f6',
    },
    grey: {
      500: '#f5f5f6',
    },
    text: {
      primary: '#333',
      secondary: 'rgba(0,0,0,.8)',
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
  },
});

/**
 * Переопределил посленим элементом массива свою тень
 */
theme.shadows[23] = '0 10px 16px -6px rgba(0,0,0,.08)'; // Тень под меню 3 уровня
theme.shadows[24] = '0 2px 16px rgba(0,0,0,.08)'; // Тень у кнопки

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
