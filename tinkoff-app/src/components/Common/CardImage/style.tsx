import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
  createStyles({
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
  })
);
