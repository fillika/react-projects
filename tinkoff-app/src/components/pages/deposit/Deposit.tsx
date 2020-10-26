import React from "react";
import { Container } from "@material-ui/core";
import { Route, Switch, NavLink } from "react-router-dom";
import { Main } from "./main";
import { Service } from "./service";
import { Tariffs } from "./tariffs";
import { Payment } from "./payment";

export const Deposit = () => {
  return (
    <div>
      <Container>
        <header>
          <div>
            Вклады
          </div>

          <div>
            <ul>
              <NavLink to='/deposit/'>Обзор</NavLink>
              <NavLink to='/deposit/service/'>Как пользоваться</NavLink>
              <NavLink to='/deposit/tariffs/'>Тарифы</NavLink>
              <NavLink to='/deposit/payment/'>Пополнить вклад</NavLink>
            </ul>
          </div>
        </header>
      </Container>

      <div>
        <Switch>
          <Route exact path='/deposit/' component={ Main }/>

          <Route exact path='/deposit/service/' component={ Service }/>

          <Route exact path='/deposit/tariffs/' component={ Tariffs }/>

          <Route exact path='/deposit/payment/' component={ Payment }/>
        </Switch>
      </div>
    </div>
  );
};