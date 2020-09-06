import React from 'react';
import { TImage } from './MainAdvBlock';

export const AdvImage: React.FC<TImage> = props => {
  const { alt, mobile, tablet, desktop, src, srcSet } = props;

  return (
    <picture>
      <source srcSet={mobile.webp} type='image/webp' media='(max-width: 768px)' />
      <source media='(max-width: 768px)' srcSet={mobile.img} />

      <source srcSet={tablet.webp} type='image/webp' media='(max-width: 1360px)' />

      <source srcSet={desktop.webp} type='image/webp' media='(min-width: 1360px)' />
      <source srcSet={desktop.img} media='(min-width: 1360px)' />

      <img alt={alt} loading='lazy' src={src} srcSet={srcSet} />
    </picture>
  );
};
