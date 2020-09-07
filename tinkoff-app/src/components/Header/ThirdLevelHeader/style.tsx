import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      padding: 0,
      whiteSpace: 'nowrap',
      height: 44,
    },
    listItem: {
      paddingLeft: 0,
      paddingBottom: 0,
      paddingTop: 0,
      display: 'inline-block',
      lineHeight: 1.8,
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
          bottom: -theme.spacing(2),
          height: 3,
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
          bottom: -theme.spacing(2),
          height: 3,
          backgroundColor: '#79818c',
        },
      },
    },
    wrapper: {
      boxShadow: theme.shadows[23],
    },
  })
);
