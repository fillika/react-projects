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
  }),
);
