import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './components/App';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
import './index.scss';

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StylesProvider } from '@material-ui/styles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <StylesProvider injectFirst>
        <ThemeProvider theme={ theme }>
          <Router>
            <App/>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
