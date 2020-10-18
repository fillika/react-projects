import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";

import { Header } from './Common/Header';
import { MainPage } from "./pages/MainPage";
import { Footer } from "./Common/Footer";
import { CreditCards } from "./pages/Cards/CreditCards";

export const App: React.FC = () => {
  return (
    <div style={ { display: 'flex', flexDirection: 'column', minHeight: '100vh' } }>
      <Header/>

      <main>
        <Switch>
          <Route exact path='/'>
            <MainPage/>
          </Route>

          <Route exact path='/cards/credit-cards/'>
            <CreditCards/>
          </Route>
        </Switch>
      </main>

      <footer style={ { marginTop: 'auto' } }>
        <Footer/>
      </footer>
    </div>
  );
};
