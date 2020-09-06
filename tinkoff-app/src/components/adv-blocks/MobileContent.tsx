import React from 'react';
import { Typography, Button, createStyles, makeStyles, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TComponentData } from './MainAdvBlock';
import { AdvImage } from './AdvImage';

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

export const MobileContent: React.FC<TComponentData> = props => {
  const classes = useStyles();
  const { title, subTitle, button, image } = props;

  return (
    <Container>
      <div className={classes.textWrapper}>
        <Typography className={classes.h1} variant='h1'>
          <Typography className={classes.title}>{title}</Typography>
        </Typography>

        <Typography className={classes.subTitle}>{subTitle}</Typography>
      </div>

      <div className={classes.imageWrapper}>
        <div className={classes.image}>
          <AdvImage {...image} />
        </div>

        <div className={classes.buttonWrapper}>
          <Link to={button.link}>
            <Button className={classes.button} variant='contained' color='primary'>
              {button.text}
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
