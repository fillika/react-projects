import React from 'react';

import { Grid, ListItem, List } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const SecondLevelHeader: React.FC = () => {
  return (
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
  );
};
