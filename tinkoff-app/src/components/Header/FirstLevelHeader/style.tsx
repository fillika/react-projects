import { makeStyles, createStyles } from '@material-ui/core';

export const useStyle = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
      paddingTop: theme.spacing(1) - 6,
      paddingBottom: theme.spacing(1) - 6,
    },
    logo: {
      width: 150,
    },
    icon: {
      padding: theme.spacing(1) - 4,
    },
    headerButton: {
      boxShadow: theme.shadows[24],
      backgroundColor: '#fff',
      fontSize: '0.55em',
      letterSpacing: 1,
      paddingTop: theme.spacing(1) - 5,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1) - 5,
      height: theme.spacing(3),
    },
  })
);
