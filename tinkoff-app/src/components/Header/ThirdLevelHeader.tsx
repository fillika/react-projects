import React from 'react';

import { Grid, ListItem, List } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const ThirdLevelHeader: React.FC = () => {
  return (
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
  );
};
