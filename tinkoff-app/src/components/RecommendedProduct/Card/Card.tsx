import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from '../Image';

import { Typography, Grid, Button } from '@material-ui/core';

import { useStyles } from './style';
import { TCard } from '../types';

export const Card: React.FC<TCard> = props => {
  const { link, title, subTitle, buttonText, image } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={4}>
      <Grid className={classes.wrapper} container direction='column'>
        <Link className={classes.wrapperLink} to={link} />

        <Grid className={classes.imageWrapper} item>
          <Image {...image} />
        </Grid>

        <Grid item className={classes.textWrapper}>
          <Typography variant='h4'>
            <p className={classes.title}>{title}</p>
          </Typography>

          <Typography className={classes.subtitle}>{subTitle}</Typography>
        </Grid>

        <Grid item>
          <Button className={classes.button}>
            <Link to={link}>{buttonText}</Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
