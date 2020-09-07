import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    list: {
      display: 'flex',
      padding: 0,
      height: 44,
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
