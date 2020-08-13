import React from 'react';
import './App.scss';
import {
  Container,
  Typography,
} from '@material-ui/core';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  container: {
    paddingTop: spacing(9) + 4,
    paddingLeft: spacing(9),
    [breakpoints.up('sm')]: {
      paddingLeft: spacing(10) + 10,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Header/>

      <Container
        className={classes.container}
        maxWidth='xl'>

        <Typography>
          Тут начинается контент
        </Typography>
      </Container>
    </>
  );
}

export default App;
