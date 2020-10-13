import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
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
  })
);
