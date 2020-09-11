import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
      marginTop: theme.spacing(11),
      marginBottom: theme.spacing(11),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    container: {
      position: 'relative',
    },
    imageWrapper: {
      position: 'absolute',
      top: -theme.spacing(13),
      right: 0,
    },
  })
);
