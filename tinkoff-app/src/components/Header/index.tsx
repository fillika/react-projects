import React from 'react';
import logoRus from '../../images/logo_rus.svg';

import { Button, Container, Box, Grid, List, ListItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <Grid container spacing={1}>
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

        <Grid container>
          <Grid item>
            <List>
              <ListItem>
                <Link to='/'>Банк</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Бизнес</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Инвестиции</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Страхование</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Мобайл</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Путешествия</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Развлечения</Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <List>
              <ListItem>
                <Link to='/'>Кредитные карты</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Дебетовые карты</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Вклады</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Премиум</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Кредит наличными</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Рефинансирование</Link>
              </ListItem>

              <ListItem>
                <Link to='/'>Автокредит</Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
