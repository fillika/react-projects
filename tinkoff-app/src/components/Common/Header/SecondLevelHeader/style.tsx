import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      boxShadow: 'inset 0 -1px 0 0 #e7e8ea',
      [theme.breakpoints.up('lg')]: {
        boxShadow: 'none',
      },
    },
    container: {
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 0,
      },
    },
    list: {
      display: 'flex',
      padding: 0,
      height: 44,
    },
    listItem: {
      paddingLeft: '0',
      [theme.breakpoints.up('lg')]: {
        paddingRight: theme.spacing(3),
      },
    },
    navLink: {
      color: '#959ba4',
      transition: theme.transitions.easing.sharp,
      transitionDuration: '220ms',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: '0.7em',

      [theme.breakpoints.up('lg')]: {
        fontSize: '0.6em',
      },

      '&:visited': {
        color: '#959ba4',
      },

      '&.active': {
        color: '#333',
      },

      '&:hover': {
        color: '#1771e6',
      },
    },
  })
);
