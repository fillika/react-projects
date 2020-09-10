import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    subtitle: {
      fontSize: '0.67em',
      fontWeight: 700,
      paddingTop: theme.spacing(6),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up('lg')]: {
        fontWeight: 400,
        fontSize: '1.2em',
        marginBottom: theme.spacing(5) + 4,
      },
    },
  })
);
