import React from 'react';

import { Grid, ListItem, List, createStyles, makeStyles, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { TLevelLinks } from './index';

const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      whiteSpace: 'nowrap',
    },
    listItem: {
      paddingLeft: '0',
      display: 'inline-block',
      width: 'auto',

      '&:hover': {
        '&::before': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          width: 'calc(100% - 16px)',
          bottom: 0,
          height: '2px',
          backgroundColor: '#79818c',
        },
      },
    },
    navLink: {
      color: '#79818c',
      transition: theme.transitions.easing.sharp,
      transitionDuration: '220ms',
      letterSpacing: 0,
      fontWeight: 500,
      fontSize: '0.65em',
      position: 'relative',

      '&:visited': {
        color: '#79818c',
      },

      '&.active': {
        color: theme.palette.text.primary,
      },

      '&:hover': {
        color: '#333',
      },
    },
    span: {
      position: 'relative',

      '&::before': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        height: '2px',
        backgroundColor: '#79818c',
      },
    },
  })
);

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
    <Container>
      <Grid container>
        <Grid item style={{ overflowX: 'scroll' }}>
          <List className={classes.list}>{createListItem}</List>
        </Grid>
      </Grid>
    </Container>
  );
};
