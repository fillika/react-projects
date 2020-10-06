import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";

import { Header } from './Header';
import { MainPage } from "./pages/MainPage";
import { Footer } from "./Common/Footer";

export const App: React.FC = () => {
  return (
    <div>
      <Header/>

      <main>
        <Switch>
          <Route exact path='/'>
            <MainPage/>
          </Route>
        </Switch>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};
