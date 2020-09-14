import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      backgroundColor: theme.palette.grey[500],
      padding: theme.spacing(4),
      marginTop: theme.spacing(13),
      position: 'relative',
      overflow: 'hidden',
    },
    title: {
      fontSize: 28,
      fontWeight: 400,
      marginBottom: theme.spacing(2),
      fontFamily: '"Fira sans", sans-serif',
      '&:hover': {
        color: '#1771E6',
      },
    },
    subtitle: {
      marginBottom: theme.spacing(2),
    },
    link: {
      '&:visited': {
        color: '#1771E6',
      },
    },
    linkWrapper: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    imageWrapper: {
      position: 'absolute',
      right: 0,
      top: -theme.spacing(5),
    },
    image: {
      minHeight: 176,
    },
  })
);
