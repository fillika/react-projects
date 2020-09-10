import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      position: 'relative',
      height: 448,
      '@media (min-width: 1360px)': {
        height: 480,
      },
    },
    textWrapper: {
      zIndex: 2,
      position: 'relative',
      paddingBottom: theme.spacing(7),
      paddingTop: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    h1: {
      width: theme.spacing(49),
      '@media (min-width: 1360px)': {
        width: theme.spacing(55),
      },
    },
    title: {
      fontFamily: '"Fira Sans", sans-serif',
      fontSize: '0.75em',
      fontWeight: 400,
      lineHeight: 1.0909,
      '@media (min-width: 1360px)': {
        fontSize: '0.915em',
      },
    },
    subTitle: {
      fontSize: 15,
      marginTop: theme.spacing(3),
      width: 336,
    },
    imageWrapper: {
      height: 448,
      width: 1024,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: -theme.spacing(3),
      zIndex: 1,
      '@media (min-width: 1360px)': {
        left: -156,
        width: 1360,
        height: 480,
      },
    },
    button: {
      fontSize: 15,
      textTransform: 'initial',
      paddingTop: theme.spacing(2) + 1,
      paddingLeft: theme.spacing(3) + 3,
      paddingRight: theme.spacing(3) + 3,
      paddingBottom: theme.spacing(2) - 2,
      fontWeight: 400,
      boxShadow: 'none',
    },
  })
);
