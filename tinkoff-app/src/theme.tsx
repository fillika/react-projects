import { createMuiTheme } from '@material-ui/core';

/**
 * Тут Я создаю тему и передаю в настройки объект
 */
export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1104,
      xl: 1920,
    },
  },
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
    body1: {
      fontSize: '0.75rem',
    },
    h1: {
      color: 'rgba(0,0,0,0.8)',
      fontSize: '3rem',
      letterSpacing: -1,
    },
    h2: {
      color: 'rgba(0,0,0,0.8)',
      fontSize: '1.875rem',
      letterSpacing: -1,
    },
    h4: {
      color: 'rgba(0,0,0,0.8)',
      fontSize: '1.0625rem',
      letterSpacing: -1,
    },
    button: {
      fontSize: 15,
      minHeight: 42,
      minWidth: 32,
      padding: '9px 23px 7px',
      textTransform: 'initial',
    },
  },
});

/**
 * Переопределил посленим элементом массива свою тень
 */
theme.shadows[23] = '0 10px 16px -6px rgba(0,0,0,.08)'; // Тень под меню 3 уровня
theme.shadows[24] = '0 2px 16px rgba(0,0,0,.08)'; // Тень у кнопки
