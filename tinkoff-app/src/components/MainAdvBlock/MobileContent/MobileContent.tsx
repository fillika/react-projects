import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TComponentData } from '../types';
import { AdvImage } from '../AdvImage/AdvImage';
import { useStyles } from './styles';

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
