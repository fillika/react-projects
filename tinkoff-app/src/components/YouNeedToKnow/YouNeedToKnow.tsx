import React from 'react';

import { Container, Typography, useMediaQuery, useTheme } from '@material-ui/core';

import { DesktopContent } from "./DesktopContent";
import { MobileContent } from "./MobileContent";

export const YouNeedToKnow: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery( theme.breakpoints.up( 'lg' ) );

  const render = isDesktop ? <DesktopContent/> : <MobileContent/>

  return (
    <div>
      <Typography variant='h2'>
        <p>Важно знать во время карантина</p>
      </Typography>

      { render }
    </div>
  );
};

