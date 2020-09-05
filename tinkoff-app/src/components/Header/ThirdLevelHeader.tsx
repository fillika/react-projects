import React from 'react';

import { Grid, ListItem, List, createStyles, makeStyles, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { TLevelLinks } from './index';

const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      padding: 0,
      whiteSpace: 'nowrap',
      height: 44,
    },
    listItem: {
      paddingLeft: '0',
      display: 'inline-block',
      width: 'auto',
    },
    navLink: {
      color: '#79818c',
      transition: theme.transitions.easing.sharp,
      transitionDuration: '220ms',
      letterSpacing: 0,
      fontWeight: 500,
      fontSize: '0.65em',
      position: 'relative',
      fontFamily: 'Segoe UI',

      '&:visited': {
        color: '#79818c',
      },

      '&.active': {
        color: theme.palette.text.primary,

        '&::before': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          width: '100%',
          bottom: -(theme.spacing(2) - 5),
          height: '2px',
          backgroundColor: theme.palette.primary.main,
        },
      },

      '&:hover': {
        color: '#333',

        '&::before': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          width: '100%',
          bottom: '-10px',
          height: '2px',
          backgroundColor: '#79818c',
        },
      },
    },
    wrapper: {
      boxShadow: theme.shadows[23],
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
