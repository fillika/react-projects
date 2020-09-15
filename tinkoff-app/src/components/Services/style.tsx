import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
      paddingBottom: theme.spacing(7),
    },
    container: {
      marginTop: theme.spacing(8),
    },
    gridContainer: {
      marginTop: 0,
      marginBottom: 0,
    },
    title: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(4),
      textAlign: 'center',
      fontWeight: 700,
      fontSize: 20,
      fontFamily: 'Fira sans, sans-serif',
      [theme.breakpoints.up('md')]: {
        fontSize: 36,
        fontWeight: 400,
        textAlign: 'left',
      },
    },
  }),
);
