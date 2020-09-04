import React from 'react';
import logoRus from '../../images/logo_rus.svg';

import { Button, Box, Grid, IconButton, useTheme, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export const FirstLevelHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.grey[500] }}>
      <Container>
        <Grid justify='space-between' alignItems='center' container>
          <Grid item>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item xs>
            <Link to='/'>
              <img style={{ width: '150px' }} src={logoRus} alt='Тинькофф' />
            </Link>
          </Grid>

          <Grid alignItems='flex-end' item>
            <Link to='/lk'>
              <Button
                style={{ boxShadow: theme.shadows[24], backgroundColor: '#fff', fontSize: '0.55em' }}
                size='small'>
                Войти
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
