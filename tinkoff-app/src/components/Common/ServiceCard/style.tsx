import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      flexDirection: 'column',
      backgroundColor: '#fff',
      padding: theme.spacing(4),
      width: '100%',
      alignItems: 'flex-start',
      minHeight: 176,
      transition: '220ms ease-in all',
      position: 'relative',
      '&:hover': {
        boxShadow: '0 12px 36px 0 rgba(0,0,0,.2)',
        transform: 'translateY(-4px)',
      },
      [theme.breakpoints.up('md')]: {
        minHeight: 228,
      },
    },
    contentWrapper: {
      width: '100%',
      position: 'relative',
      textAlign: 'left',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontWeight: 700,
      width: 'calc(100% - 64px)',
      [theme.breakpoints.up('md')]: {
        fontSize: 24,
        fontWeight: 500,
      },
    },
    imageIcon: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8),
      },
    },
    smallText: {
      width: 'calc(100% - 64px)',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      fontSize: 15,
    },
    pseudoLink: {
      marginTop: 'auto',
      color: '#1771E6',
      fontSize: 15,
      '&:hover': {
        opacity: 0.95,
      },
    },
    linkWrapper: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
    },
  })
);
