import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Grid, IconButton, Container, useMediaQuery, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyle } from './style';

import { SecondLevelHeader } from '../SecondLevelHeader';

import logoRus from '../../../../images/logo_rus.svg';

export const FirstLevelHeader: React.FC = () => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const burger = matches && (
    <Grid style={{ marginRight: '8px' }} item>
      <IconButton className={classes.icon} edge='start' color='inherit' aria-label='menu'>
        <MenuIcon />
      </IconButton>
    </Grid>
  );
  const menu = !matches && (
    <Grid item lg={9}>
      <SecondLevelHeader />
    </Grid>
  );

  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid justify='space-between' alignItems='center' container>
          {burger}

          <Grid item xs lg={2}>
            <Link to='/'>
              <img className={classes.logo} src={logoRus} alt='Тинькофф' />
            </Link>
          </Grid>

          {menu}

          <Grid item style={{ display: 'flex' }}>
            <Button className={classes.headerButton} size='small'>
              <Link to='/lk'>Войти</Link>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
