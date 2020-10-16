import { createMuiTheme } from '@material-ui/core';

const variables = {
  color: {
    gray: '#333',
  },
};
/**
 * Тут Я создаю тему и передаю в настройки объект
 */
export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 360,
      sm: 600,
      md: 960,
      lg: 1154,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#ffdd2d',
      dark: 'rgb(252 197 33)'
    },
    secondary: {
      main: '#f5f5f6',
    },
    grey: {
      500: '#f5f5f6',
    },
    text: {
      primary: '#fff',
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
      color: 'rgba(0,0,0, 0.8)',
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: -1,
      '@media (min-width: 1154px)': {
        fontWeight: 400,
        fontSize: 36,
      },
      '@media (min-width: 1360px)': {
        fontSize: 44,
      },
    },
    h2: {
      color: variables.color.gray,
      fontSize: 20,
      letterSpacing: -1,
      fontWeight: 700,
      textAlign: 'center',
      paddingTop: 48,
      paddingBottom: 32,
      '@media (min-width: 1154px)': {
        fontWeight: 400,
        fontSize: 36,
        textAlign: 'left',
      },
    },
    h4: {
      color: variables.color.gray,
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
