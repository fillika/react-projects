import React from 'react';
import { Link } from 'react-router-dom';

import { CardImage } from '../CardImage';

import { Typography, Grid, Button } from '@material-ui/core';

import { useStyles } from './style';
import { TCard, TTitle } from './types';
import { useCommonStyles } from "../../../commonStyles";

export const Card: React.FC<TCard> = props => {
  const { link, title, subTitle, image, buttonText, isLink } = props;
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const wrapLink = isLink
    ? <Link className={ classes.wrapperLink } to={ link }/>
    : <a className={ classes.wrapperLink } href={ link }>&nbsp;</a>

  const button = isLink
    ? <Button className={ commonClasses.blueButton }>
        <Link style={ { color: '#1771e6' } } to={ link }>{ buttonText }</Link>
      </Button>
    : <Button href={ link } className={ commonClasses.blueButton }>
        <span style={ { color: '#1771e6' } }>{ buttonText }</span>
      </Button>

  return (
    <Grid item xs={ 12 } lg={ 4 }>
      <Grid className={ classes.wrapper } container direction='column'>
        { wrapLink }

        <Grid className={ classes.imageWrapper } item>
          <CardImage { ...image } />
        </Grid>

        <Grid item className={ classes.textWrapper }>

          <Title classes={ classes } title={ title }/>

          <Typography className={ classes.subtitle }>{ subTitle }</Typography>
        </Grid>

        <Grid style={ { marginTop: 'auto' } } item>
          { button }
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
