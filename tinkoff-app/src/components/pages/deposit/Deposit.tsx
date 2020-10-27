import React from "react";
import { Container, createStyles, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { Route, Switch, NavLink } from "react-router-dom";
import { Main } from "./main";
import { Service } from "./service";
import { Tariffs } from "./tariffs";
import { Payment } from "./payment";

export const Deposit = () => {
  const theme = useTheme();
  const { title, navigation, link, header } = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const mobileHeader = (
    <header className={ header }>
      <div className={ title }>
        <Container>
          Вклады
        </Container>
      </div>

      <div className={ navigation }>
        <NavLink exact className={ link } to='/deposit/'>Обзор</NavLink>
        <NavLink className={ link } to='/deposit/service/'>Как пользоваться</NavLink>
        <NavLink className={ link } to='/deposit/tariffs/'>Тарифы</NavLink>
        <NavLink className={ link } to='/deposit/payment/'>Пополнить вклад</NavLink>
      </div>
    </header>
  );

  const desktopHeader = (
    <Container>
      <header className={ header }>
        <div className={ title }>
          Вклады
        </div>

        <div className={ navigation }>
          <NavLink exact className={ link } to='/deposit/'>Обзор</NavLink>
          <NavLink className={ link } to='/deposit/service/'>Как пользоваться</NavLink>
          <NavLink className={ link } to='/deposit/tariffs/'>Тарифы</NavLink>
          <NavLink className={ link } to='/deposit/payment/'>Пополнить вклад</NavLink>
        </div>
      </header>
    </Container>
  );

  return (
    <div>
      { matches ? desktopHeader : mobileHeader }

      <div>
        <Switch>
          <Route exact path='/deposit/' component={ Main }/>

          <Route exact path='/deposit/service/' component={ Service }/>

          <Route exact path='/deposit/tariffs/' component={ Tariffs }/>

          <Route exact path='/deposit/payment/' component={ Payment }/>
        </Switch>
      </div>
    </div>
  );
};

const useStyles = makeStyles(({ spacing, breakpoints, transitions, palette }) =>
  createStyles({
    header: {
      [breakpoints.up('lg')]: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    },
    title: {
      borderBottom: '1px solid #e7e8ea',
      height: 44,
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,

      [breakpoints.up('lg')]: {
        height: 56,
        borderBottom: 'none',

      },
    },
    navigation: {
      display: 'flex',
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      maxWidth: 1154,
      margin: '0 auto',
      overflowX: 'scroll',

      [breakpoints.up('sm')]: {
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
      },

      [breakpoints.up('lg')]: {
        margin: '0 0 0 auto'
      },
    },
    link: {
      position: 'relative',
      whiteSpace: 'nowrap',
      marginRight: spacing(3),
      color: '#79818c',
      fontSize: 13,
      fontWeight: 500,
      height: 44,
      display: 'flex',
      alignItems: 'center',

      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        height: 2,
        width: '100%'
      },

      '&:last-child': {
        // paddingRight: spacing(2),
        marginRight: 0,
      },

      '&.active': {
        color: '#333',

        '&:before': {
          backgroundColor: '#ffdd2d'
        },
      },

      '&:hover': {
        color: '#333',

        '&:before': {
          backgroundColor: '#cbcfd3'
        },
      },

      [breakpoints.up('sm')]: {
        '&:last-child': {

          // paddingRight: spacing(3)
        },
      },

      [breakpoints.up('lg')]: {
        height: 56,
      },
    },

  }));