import {makeStyles, createStyles} from '@material-ui/core';

export const useStyle = makeStyles(theme => createStyles({
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
      marginLeft: -theme.spacing(1),
    },
    headerButton: {
      boxShadow: theme.shadows[24],
      backgroundColor: '#fff',
      fontSize: '0.6em',
      letterSpacing: 1,
      paddingTop: theme.spacing(1) - 5,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1) - 5,
      minHeight: 0,
      textTransform: 'uppercase',
      color: 'rgba(0, 0, 0, 0.87)',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0,0,0,.16)',
        color: '#0000ee',
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(1) - 2,
        paddingBottom: theme.spacing(1) - 1,
        paddingLeft: theme.spacing(1) + 4,
        paddingRight: theme.spacing(1) + 4,
      },
    },
  }),
);
