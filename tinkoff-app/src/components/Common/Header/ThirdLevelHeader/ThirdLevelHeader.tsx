import React from 'react';
import { NavLink } from 'react-router-dom';

import { TLevelLinks } from '../types';

import { Grid, ListItem, List, Container } from '@material-ui/core';
import { useStyles } from './style';

/**
 * NOTE: Если меню будет дублироваться (например header, footer),
 * то разные модули будут связаны общим меню. Надо придумать, как избежать этого
 * или куда можно вынести общие данные, чтобы каждый модуль мог переиспользовать их
 */
const thirdLevelLinks: TLevelLinks = [
  {
    id: 1,
    name: 'Кредитные карты',
    address: '/cards/credit-cards/',
  },
  {
    id: 2,
    name: 'Дебетовые карты',
    address: '/cards/debit-cards/',
  },
  {
    id: 3,
    name: 'Вклады',
    address: '/deposit/',
  },
  {
    id: 4,
    name: 'Премиум',
    address: '/tinkoff-premium/',
  },
  {
    id: 5,
    name: 'Кредит наличными',
    address: '/loans/cash-loan/',
  },
  {
    id: 6,
    name: 'Рефинансирование',
    address: '/loans/refinance/',
  },
  {
    id: 7,
    name: 'Автокредит',
    address: '/loans/auto-loan/',
  },
];

export const ThirdLevelHeader: React.FC = () => {
  const classes = useStyles();

  const createListItem = thirdLevelLinks.map(({ id, name, address }) => (
    <ListItem className={classes.listItem} key={id}>
      <NavLink exact className={classes.navLink} to={address}>
        <span>{name}</span>
      </NavLink>
    </ListItem>
  ));

  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container>
          <Grid item style={{ overflowX: 'scroll' }}>
            <List className={classes.list}>{createListItem}</List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
