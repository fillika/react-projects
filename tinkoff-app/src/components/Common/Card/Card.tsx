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

  /**
   * Это ссылка-обертка на всю карточку. В зависимости от параметра isLink
   * Я подставляю либо ссылку для роутинга, либо реальную ссылку
   */
  const wrapLink = isLink
    ? <Link className={ classes.wrapperLink } to={ link }/>
    : <a target='_blank' className={ classes.wrapperLink } href={ link }>&nbsp;</a>

  /**
   * Это ссылка-кнопка для карточки В зависимости от параметра isLink
   * Я подставляю либо ссылку для роутинга, либо реальную ссылку
   */
  const button = isLink
    ? <Button className={ commonClasses.blueButton }>
      <Link style={ { color: '#1771e6' } } to={ link }>{ buttonText }</Link>
    </Button>
    : <Button className={ commonClasses.blueButton }>
      <a style={ { color: '#1771e6' } } target='_blank' href={ link }>{ buttonText }</a>
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
