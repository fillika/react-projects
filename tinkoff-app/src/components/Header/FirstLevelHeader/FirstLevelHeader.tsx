import React from 'react';
import logoRus from '../../../images/logo_rus.svg';
import { Button, Grid, IconButton, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useStyle } from './style';

export const FirstLevelHeader: React.FC = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid justify='space-between' alignItems='center' container>
          <Grid style={{ marginRight: '8px' }} item>
            <IconButton className={classes.icon} edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item xs>
            <Link to='/'>
              <img className={classes.logo} src={logoRus} alt='Тинькофф' />
            </Link>
          </Grid>

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
