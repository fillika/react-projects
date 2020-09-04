import React from 'react';

import { Grid, ListItem, List, Container, makeStyles, createStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { TLevelLinks } from './index';

const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      display: 'flex',
    },
    listItem: {
      paddingLeft: '0',
    },
    navLink: {
      color: '#959ba4',
      transition: theme.transitions.easing.sharp,
      transitionDuration: '220ms',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: '0.55em',

      '&:visited': {
        color: '#959ba4',
      },

      '&.active': {
        color: theme.palette.text.primary,
      },

      '&:hover': {
        color: '#1771e6',
      },
    },
  })
);

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
    <Container>
      <Grid container>
        <Grid style={{ overflowX: 'scroll' }} item>
          <List className={classes.list}>{createListItem}</List>
        </Grid>
      </Grid>
    </Container>
  );
};
