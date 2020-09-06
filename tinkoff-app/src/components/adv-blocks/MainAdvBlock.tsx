import React from 'react';
import { createStyles, makeStyles, useMediaQuery } from '@material-ui/core';
import { MobileContent } from './MobileContent';
import { DesktopContent } from './DesktopContent';

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
      paddingTop: theme.spacing(2),
      '@media (min-width:768px)': {
        height: '448px',
        paddingTop: 0,
      },
      '@media (min-width: 1360px)': {
        height: '480px',
      },
    },
  })
);

export const MainAdvBlock: React.FC = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 768px)');

  return <div className={classes.wrapper}>{matches ? <MobileContent /> : <DesktopContent />}</div>;
};
