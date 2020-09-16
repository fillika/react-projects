import React from 'react';
import { Link } from 'react-router-dom';

import { CardImage } from '../CardImage';

import { Typography, Grid, Button } from '@material-ui/core';

import { useStyles } from './style';
import { useCommonStyles } from '../../../commonStyles';
import { TCard, TTitle } from './types';

export const Card: React.FC<TCard> = props => {
  const { link, title, subTitle, buttonText, image } = props;
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <Grid item xs={ 12 } lg={ 4 }>
      <Grid className={ classes.wrapper } container direction='column'>
        <Link className={ classes.wrapperLink } to={ link }/>

        <Grid className={ classes.imageWrapper } item>
          <CardImage { ...image } />
        </Grid>

        <Grid item className={ classes.textWrapper }>

          <Title classes={ classes } title={ title }/>

          <Typography className={ classes.subtitle }>{ subTitle }</Typography>
        </Grid>

        <Grid style={ { marginTop: 'auto' } } item>
          <Button className={ commonClasses.blueButton }>
            <Link style={ { color: '#1771e6' } } to={ link }>{ buttonText }</Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Title: React.FC<TTitle> = props => {
  const { title, classes } = props;

  if (title === null) return null;

  return (
    <Typography variant='h4'>
      <p className={ classes.title }>{ title }</p>
    </Typography>
  );
};
