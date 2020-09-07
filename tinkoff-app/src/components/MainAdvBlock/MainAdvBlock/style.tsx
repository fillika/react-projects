import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
      paddingTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        height: 434,
        paddingTop: 0,
      },
      [theme.breakpoints.up('lg')]: {
        height: 448,
      },
      '@media (min-width: 1360px)': {
        height: 480,
      },
    },
  })
);
