import React from "react";

import { DesktopNavigation } from "./DesktopNavigation";

import { Container, useMediaQuery, useTheme } from "@material-ui/core";
import { useStyle } from "./style";
import { Information } from "../Information";
import { Award } from "../Award";

export const FooterNavigation: React.FC = () => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={ classes.wrapper }>
      <Container>
        {
          matches
            ? <DesktopNavigation/>
            : ''
        }

        <Information/>
        <Award/>
      </Container>
    </div>
  );
};