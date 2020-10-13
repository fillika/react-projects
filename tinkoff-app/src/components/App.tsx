import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";

import { Header } from './Header';
import { MainPage } from "./pages/MainPage";
import { Footer } from "./Common/Footer";
import { CreditCards } from "./pages/Cards/CreditCards";

export const App: React.FC = () => {
  return (
    <div>
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

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};
