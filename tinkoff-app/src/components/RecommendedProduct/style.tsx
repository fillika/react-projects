import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    subtitle: {
      fontSize: '0.67em',
      fontWeight: 700,
      textAlign: 'center',
      paddingTop: theme.spacing(6),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up('lg')]: {},
    },
  })
);
