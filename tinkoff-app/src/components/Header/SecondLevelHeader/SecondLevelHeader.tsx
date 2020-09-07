import React from 'react';

import { Grid, ListItem, List, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { TLevelLinks } from '../types';
import { useStyles } from './style';

const secondLevelLinks: TLevelLinks = [
  {
    id: 1,
    name: 'Банк',
    address: '/',
  },
  {
    id: 2,
    name: 'Бизнес',
    address: '/business/',
  },
  {
    id: 3,
    name: 'Инвестиии',
    address: '/invest/',
  },
  {
    id: 4,
    name: 'Страхование',
    address: '/insurance/',
  },
  {
    id: 5,
    name: 'Мобайл',
    address: '/mobile-operator/',
  },
  {
    id: 6,
    name: 'Путешествия',
    address: '/travel/flights/',
  },
  {
    id: 7,
    name: 'Развлечения',
    address: '/entertainment/moskva/life/',
  },
];

export const SecondLevelHeader: React.FC = () => {
  const classes = useStyles();

  /**
   * Из списка делаю рендер меню
   */
  const createListItem = secondLevelLinks.map(({ id, name, address }) => (
    <ListItem className={classes.listItem} key={id}>
      <NavLink exact className={classes.navLink} to={address}>
        {name}
      </NavLink>
    </ListItem>
  ));

  return (
    <div style={{ boxShadow: 'inset 0 -1px 0 0 #e7e8ea' }}>
      <Container>
        <Grid container>
          <Grid style={{ overflowX: 'scroll' }} item>
            <List className={classes.list}>{createListItem}</List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
