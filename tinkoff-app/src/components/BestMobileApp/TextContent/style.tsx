import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(7),
    },
    textWrapper: {
      maxWidth: 346,
    },
    title: {
      fontSize: 44,
      lineHeight: '48px',
      fontWeight: 400,
    },
    subtitle: {
      marginTop: theme.spacing(3),
    },
    imageWrapper: {
      marginTop: theme.spacing(3),
    },
    buttonWrapper: {
      marginTop: theme.spacing(3),
    },
    button: {
      color: '#1771e6',
      paddingLeft: 0,
      '&:visited': {
        color: '#1771e6',
      },
      '&:hover': {
        backgroundColor: 'transparent',
        opacity: 0.95,
      },
    },
  })
);
