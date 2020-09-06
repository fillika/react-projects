import React from 'react';
import { Typography, Button, createStyles, makeStyles, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TComponentData } from './MainAdvBlock';
import { AdvImage } from './AdvImage';

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      position: 'relative',
      height: 448,
      '@media (min-width: 1360px)': {
        height: 480,
      },
    },
    textWrapper: {
      zIndex: 2,
      position: 'relative',
      paddingBottom: theme.spacing(7),
      paddingTop: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    h1: {
      fontSize: '1.8rem',
      width: theme.spacing(49),
      '@media (min-width: 1360px)': {
        width: theme.spacing(55),
        fontSize: '2.05em',
      },
    },
    title: {
      fontFamily: '"Fira Sans", sans-serif',
      color: 'rgba(0,0,0,.8)',
      fontSize: '1em',
      fontWeight: 400,
      lineHeight: 1.0909,
    },
    subTitle: {
      fontSize: '0.75em',
      marginTop: theme.spacing(3),
      width: 336,
    },
    imageWrapper: {
      height: 448,
      width: 1024,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: -theme.spacing(3),
      zIndex: 1,
      '@media (min-width: 1360px)': {
        left: -156,
        width: 1360,
        height: 480,
      },
    },
    button: {
      fontSize: '0.75em',
      textTransform: 'initial',
      paddingTop: theme.spacing(2) + 1,
      paddingLeft: theme.spacing(3) + 3,
      paddingRight: theme.spacing(3) + 3,
      paddingBottom: theme.spacing(2) - 2,
      fontWeight: 400,
      boxShadow: 'none',
    },
  })
);

export const DesktopContent: React.FC<TComponentData> = props => {
  const classes = useStyles();
  const { title, subTitle, button, image } = props;

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.imageWrapper}>
          <div>
            <AdvImage {...image} />
          </div>
        </div>

        <div className={classes.textWrapper}>
          <div style={{ flexGrow: 1 }}>
            <Typography className={classes.h1} variant='h1'>
              <Typography className={classes.title}>{title}</Typography>
            </Typography>

            <Typography className={classes.subTitle}>{subTitle}</Typography>
          </div>

          <div>
            <Link to={button.link}>
              <Button className={classes.button} variant='contained' color='primary'>
                {button.text}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
