import React, { useState } from 'react';
import {
  IconButton,
  Divider,
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery
} from '@material-ui/core';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';

const Header = props => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 600px)')
  const iconSize = matches ? 'large' : 'default'; // определяю размер иконок
  const [open, setOpen] = useState(false);

  const appBarClass = clsx(classes.appBar, {
    [classes.appBarShift]: open,
  });

  const drawerClass = clsx(classes.drawer, {
    [classes.drawerOpen]: open,
    [classes.drawerClose]: !open,
  });

  /**
   * Функция переключает состояние переменной open
   */
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        className={appBarClass}
        position='fixed'>

        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            color='secondary'
            edge='start'>
            <MenuIcon/>
          </IconButton>
          <Typography variant='h5'>My finance</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={drawerClass}
        classes={{ paper: drawerClass }}
        variant='permanent'>

        <div className={classes.toolbar}>
          <IconButton>
            <ArrowBackIcon onClick={handleDrawerToggle}/>
          </IconButton>
        </div>
        <Divider/>

        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWalletIcon fontSize={iconSize}/>
            </ListItemIcon>
            <ListItemText>Balance</ListItemText>
          </ListItem>


          <ListItem button>
            <ListItemIcon>
              <MonetizationOnOutlinedIcon fontSize={iconSize}/>
            </ListItemIcon>
            <ListItemText>Income</ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <IndeterminateCheckBoxOutlinedIcon fontSize={iconSize}/>
            </ListItemIcon>
            <ListItemText>Expenses</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
