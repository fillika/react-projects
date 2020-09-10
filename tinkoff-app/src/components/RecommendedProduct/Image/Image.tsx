import React from 'react';

import { useTheme } from '@material-ui/core';
import { useStyles } from './style';
import { TImage } from '../types';

export const Image: React.FC<TImage> = props => {
  const { alt, src, srcSet, webp, mobile } = props;
  const theme = useTheme();
  const useMedia = `(max-width: ${theme.breakpoints.values.lg - 1}px)`;
  const classes = useStyles();

  return (
    <picture>
      <source media={useMedia} type='image/webp' srcSet={mobile.webp} />

      <source media={useMedia} srcSet={mobile.img} />

      <source srcSet={webp} type='image/webp' />

      <img className={classes.image} loading='lazy' src={src} srcSet={srcSet} alt={alt} />
    </picture>
  );
};
