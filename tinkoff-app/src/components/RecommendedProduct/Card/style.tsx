import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      textAlign: 'center',
      overflowX: 'hidden',
      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
      },
    },
    imageWrapper: {
      position: 'relative',
      minHeight: 312,
      [theme.breakpoints.up('lg')]: {
        minHeight: 0,
        marginBottom: theme.spacing(3),
      },
    },
    image: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      minHeight: 312,
      [theme.breakpoints.up('lg')]: {
        minHeight: 0,
        position: 'initial',
        transform: 'translate(0,0)',
      },
    },
    textWrapper: {
      padding: theme.spacing(3),
      [theme.breakpoints.up('lg')]: {
        padding: 0,
      },
    },
    title: {
      fontWeight: 700,
      [theme.breakpoints.up('lg')]: {
        fontWeight: 400,
        fontSize: '1.4em',
      },
    },
    subtitle: {
      paddingTop: theme.spacing(2),
      fontSize: 15,
    },
  })
);
