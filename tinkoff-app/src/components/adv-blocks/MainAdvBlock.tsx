import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, createStyles, makeStyles, useMediaQuery } from '@material-ui/core';
import { MobileContent } from './MobileContent';

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
      paddingTop: theme.spacing(2),
    },
    textWrapper: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
      textAlign: 'center',
    },
    h1: {
      fontSize: '1rem',
    },
    title: {
      color: 'rgba(0,0,0,.8)',
      fontSize: '1.2em',
      fontWeight: 700,
    },
    subTitle: {
      fontSize: '0.75em',
      marginTop: theme.spacing(2),
    },
    imageWrapper: {
      height: '328px',
      overflow: 'hidden',
      position: 'relative',
    },
    image: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    buttonWrapper: {
      position: 'absolute',
      bottom: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    button: {
      fontSize: '0.75em',
      textTransform: 'initial',
      paddingTop: theme.spacing(1) + 1,
      paddingLeft: theme.spacing(3) - 1,
      paddingRight: theme.spacing(3) - 1,
      paddingBottom: theme.spacing(1) - 1,
      fontWeight: 400,
    },
  })
);

export const MainAdvBlock: React.FC = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <div className={classes.wrapper}>
      <Container>{matches ? <MobileContent /> : <p>More than 768px</p>}</Container>
    </div>
  );
};
