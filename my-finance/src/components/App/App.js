import React from 'react';
import './App.scss';
import {
  Container,
  Typography,
  TextField,
} from '@material-ui/core';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/styles';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Income from '../Income/Income';

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  container: {
    paddingTop: spacing(9) + 4,
    paddingLeft: spacing(9),
    [breakpoints.up('sm')]: {
      paddingLeft: spacing(10) + 10,
    },
  },
  root: {
    backgroundColor: '#fff',
    height: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>

      <Container
        className={classes.container}
        maxWidth='lg'>

        <Switch>
          <Route
            exact
            path='/'>
            <Typography>
              Экран приветствия
            </Typography>
          </Route>

          <Route
            exact
            path='/balance/'>
            <Typography
              align='center'
              variant='h2'>
              Balance
            </Typography>
            <Typography variant='h4'>
              28 574 руб
            </Typography>
            <Typography>
              Наличные 32 540 руб
            </Typography>
            <Typography>
              Депозит 65 835 руб
            </Typography>
            <Typography>
              Инвестиции 65 835 руб
            </Typography>
          </Route>

          <Route
            exact
            path='/income/'>

            <Income classes={classes}/>
          </Route>

          <Route
            exact
            path='/expenses/'>
            <Typography
              align='center'
              variant='h2'>
              Расходы
            </Typography>

            <form
              color='primary'
              noValidate>
              <TextField
                id='datetime-local'
                label='Next appointment'
                type='date'
                defaultValue='2017-05-24T10:30'
                InputLabelProps={{
                  shrink: true,
                }}/>
            </form>

            <Typography variant='h4'>
              Категории
            </Typography>

            <Typography
              color='primary'
              variant='h5'>
              Еда
            </Typography>

            <Typography>
              Продукты 18 050 руб
            </Typography>
            <Typography>
              Рестораны/кафе 8 213 руб
            </Typography>

            <Typography
              color='primary'
              variant='h5'>
              Жилье
            </Typography>

            <Typography>
              Аренда квартиры 18 000 руб
            </Typography>

            <Typography
              color='primary'
              variant='h5'>
              Кредиты
            </Typography>

            <Typography>
              Проезд 1850 руб
            </Typography>
          </Route>

        </Switch>
      </Container>
    </div>
  );
}

export default App;
