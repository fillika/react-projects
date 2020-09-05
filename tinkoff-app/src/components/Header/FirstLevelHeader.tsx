import React from 'react';
import logoRus from '../../images/logo_rus.svg';

import { Button, Grid, IconButton, useTheme, Container, makeStyles, createStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
    },
    logo: {
      width: 150,
    },
    headerButton: {
      boxShadow: theme.shadows[24],
      backgroundColor: '#fff',
      fontSize: '0.55em',
      letterSpacing: 1,
      paddingTop: theme.spacing(1) - 3,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1) - 5,
      height: theme.spacing(3),
    },
  })
);

export const FirstLevelHeader: React.FC = () => {
  const theme = useTheme();
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid justify='space-between' alignItems='center' container>
          <Grid item>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </Grid>

          <Grid item xs>
            <Link to='/'>
              <img className={classes.logo} src={logoRus} alt='Тинькофф' />
            </Link>
          </Grid>

          <Grid item>
            <Link to='/lk'>
              <Button className={classes.headerButton} size='small'>
                Войти
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
