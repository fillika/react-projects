import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  })
);