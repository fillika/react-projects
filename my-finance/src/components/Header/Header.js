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
  useMediaQuery,
} from '@material-ui/core';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import { Link } from 'react-router-dom';

const Header = props => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width: 600px)');
  const iconSize = matches ? 'large' : 'default'; // определяю размер иконок
  const [open, setOpen] = useState(false);

  const appBarClass = clsx(classes.appBar, {
    [classes.appBarShift]: open,
  });

  const drawerClass = clsx(classes.drawer, {
    [classes.drawerOpen]: open,
    [classes.drawerClose]: !open,
  });

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <AppBar
        className={appBarClass}
        position='fixed'>

        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            color='secondary'
            edge='start'>
            <MenuIcon/>
          </IconButton>
          <Typography variant='h5'>
            <Link to='/'>
              My finance
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={drawerClass}
        classes={{ paper: drawerClass }}
        variant='permanent'>

        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <Divider/>

        <List>
          <Link onClick={handleDrawerClose} to='/balance/'>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceWalletIcon fontSize={iconSize}/>
              </ListItemIcon>
              <ListItemText>Balance</ListItemText>
            </ListItem>
          </Link>

          <Link onClick={handleDrawerClose} to='/income/'>
            <ListItem button>
              <ListItemIcon>
                <MonetizationOnOutlinedIcon fontSize={iconSize}/>
              </ListItemIcon>
              <ListItemText>Income</ListItemText>
            </ListItem>
          </Link>

          <Link onClick={handleDrawerClose} to='/expenses/'>
            <ListItem button>
              <ListItemIcon>
                <IndeterminateCheckBoxOutlinedIcon fontSize={iconSize}/>
              </ListItemIcon>
              <ListItemText>Expenses</ListItemText>
            </ListItem>
          </Link>
        </List>

      </Drawer>
    </>
  );
};

export default Header;
