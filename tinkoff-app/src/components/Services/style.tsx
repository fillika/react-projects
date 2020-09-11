import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      backgroundColor: theme.palette.grey[500],
      marginTop: theme.spacing(8),
    },
    gridContainer: {
      marginTop: 0,
      marginBottom: 0,
    },
    title: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(1),
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
  })
);
