import React from 'react';
import { TImage } from '../types';

export const AdvImage: React.FC<TImage> = props => {
  const { alt, mobile, tablet, desktop, src, srcSet } = props;

  return (
    <picture>
      <source srcSet={mobile.webp} type='image/webp' media='(max-width: 960px)' />
      <source media='(max-width: 960px)' srcSet={mobile.img} />

      <source srcSet={tablet.webp} type='image/webp' media='(max-width: 1360px)' />

      <source srcSet={desktop.webp} type='image/webp' media='(min-width: 1360px)' />
      <source srcSet={desktop.img} media='(min-width: 1360px)' />

      <img alt={alt} loading='lazy' src={src} srcSet={srcSet} />
    </picture>
  );
};
