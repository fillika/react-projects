import React from 'react';
import logoRus from '../../images/logo_rus.svg';

import { Button, Grid, IconButton, Container, makeStyles, createStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
      paddingTop: theme.spacing(1) - 6,
      paddingBottom: theme.spacing(1) - 6,
    },
    logo: {
      width: 150,
    },
    icon: {
      padding: theme.spacing(1) - 4,
    },
    headerButton: {
      boxShadow: theme.shadows[24],
      backgroundColor: '#fff',
      fontSize: '0.55em',
      letterSpacing: 1,
      paddingTop: theme.spacing(1) - 5,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1) - 5,
      height: theme.spacing(3),
    },
  })
);

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
