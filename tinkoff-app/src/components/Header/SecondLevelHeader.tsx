import React from 'react';

import { Grid, ListItem, List, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const SecondLevelHeader: React.FC = () => {
  return (
    <Container>
      <Grid container>
        <Grid item>
          <List>
            <ListItem>
              <NavLink to='/'>Банк</NavLink>
            </ListItem>

            <ListItem>
              <NavLink to='/'>Бизнес</NavLink>
            </ListItem>

            <ListItem>
              <NavLink to='/'>Инвестиции</NavLink>
            </ListItem>

            <ListItem>
              <NavLink to='/'>Страхование</NavLink>
            </ListItem>

            <ListItem>
              <NavLink to='/'>Мобайл</NavLink>
            </ListItem>

            <ListItem>
              <NavLink to='/'>Путешествия</NavLink>
            </ListItem>

            <ListItem>
              <NavLink to='/'>Развлечения</NavLink>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};
