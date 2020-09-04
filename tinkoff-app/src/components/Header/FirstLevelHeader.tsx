import React from 'react';
import logoRus from '../../images/logo_rus.svg';

import { Button, Box, Grid, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export const FirstLevelHeader: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
      </Grid>

      <Grid item xs={7}>
        <Link to='/'>
          <img src={logoRus} alt='Тинькофф' />
        </Link>
      </Grid>

      <Grid item xs={3}>
        <Box>
          <Link to='/lk'>
            <Button>Войти</Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};
