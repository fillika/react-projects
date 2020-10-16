import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      padding: 0,
      whiteSpace: 'nowrap',
      height: 44,
      display: 'flex',
      [theme.breakpoints.up('lg')]: {
        height: 56,
      },
    },
    listItem: {
      paddingLeft: 0,
      paddingBottom: 0,
      paddingTop: 0,
      display: 'flex',
      lineHeight: 1.8,
      width: 'auto',
      height: '100%',
    },
    navLink: {
      color: '#79818c',
      transition: theme.transitions.easing.sharp,
      transitionDuration: '220ms',
      letterSpacing: 0,
      fontWeight: 500,
      fontSize: '0.8em',
      position: 'relative',
      fontFamily: 'Segoe UI',
      height: theme.spacing(5) + 4,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      [theme.breakpoints.up('lg')]: {
        height: theme.spacing(7),
        fontSize: '0.7em',
      },

      '&:visited': {
        color: '#79818c',
      },

      '&.active': {
        color: '#333',

        '&::before': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          width: '100%',
          bottom: 0,
          height: 2,
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
          bottom: 0,
          height: 2,
          backgroundColor: '#79818c',
        },
      },
    },
    wrapper: {
      boxShadow: theme.shadows[23],
    },
  })
);
