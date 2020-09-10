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
          bottom: -theme.spacing(1) - 3,
          height: 3,
          backgroundColor: theme.palette.primary.main,
          [theme.breakpoints.up('lg')]: {
            bottom: -theme.spacing(2) - 1,
          },
        },
      },

      '&:hover': {
        color: '#333',

        '&::before': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          width: '100%',
          bottom: -theme.spacing(1) - 3,
          height: 3,
          backgroundColor: '#79818c',
          [theme.breakpoints.up('lg')]: {
            bottom: -theme.spacing(2) - 1,
          },
        },
      },
    },
    wrapper: {
      boxShadow: theme.shadows[23],
    },
  })
);
