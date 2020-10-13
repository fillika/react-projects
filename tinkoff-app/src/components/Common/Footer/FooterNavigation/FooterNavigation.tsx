import React from "react";

import { DesktopNavigation } from "./DesktopNavigation";

import { Container, useMediaQuery, useTheme } from "@material-ui/core";
import { useStyle } from "./style";
import { Information } from "../Information";
import { Award } from "../Award";
import { Basement } from "../Basement";
import { Route, Switch } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage";

export const FooterNavigation: React.FC = () => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={ classes.wrapper }>
      <Container>
        { matches && <DesktopNavigation/> }

        <Switch>
          <Route exact path='/'>
            <Information/>
            <Award/>
          </Route>
        </Switch>

        <Basement/>
      </Container>
    </div>
  );
};