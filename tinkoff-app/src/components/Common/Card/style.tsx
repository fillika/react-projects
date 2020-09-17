import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      textAlign: 'center',
      position: 'relative',
      height: '100%',
      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
      },
    },
    imageWrapper: {
      position: 'relative',
      minHeight: 312,
      [theme.breakpoints.up('lg')]: {
        minHeight: 0,
        marginBottom: theme.spacing(3),
      },
    },
    textWrapper: {
      padding: theme.spacing(3),
      [theme.breakpoints.up('lg')]: {
        padding: 0,
        paddingBottom: theme.spacing(3),
      },
    },
    wrapperLink: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: 10000,
    },
    title: {
      fontWeight: 700,
      [theme.breakpoints.up('lg')]: {
        fontWeight: 500,
        fontSize: '1.3em',
      },
    },
    subtitle: {
      paddingTop: theme.spacing(2),
      fontSize: 15,
    },
  })
);
