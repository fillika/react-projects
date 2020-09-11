import React from 'react';
import { Typography, Button } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import { useStyles } from './style';

export const TextContent: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.textWrapper}>
        <Typography variant='h2'>
          <p className={classes.title}>Лучший мобильный банк в мире</p>
        </Typography>

        <p className={classes.subtitle}>
          По&nbsp;версии Global&nbsp;Finance&nbsp;— Best&nbsp;Digital&nbsp;Bank&nbsp;Award&nbsp;2018
        </p>

        <div className={classes.imageWrapper}>
          <picture>
            <img
              loading='lazy'
              src='https://acdn.tinkoff.ru/static/pages/files/6c2953f3-252f-4035-9358-4980d37f1be2.svg'
              alt='QR code'
            />
          </picture>
        </div>
      </div>

      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          href='https://app.appsflyer.com/id455652438?pid=tinkoff.ru&c=page_main_button_desktop&af_cost_model=prm.unp'
          disableRipple
          variant='text'>
          <AppleIcon style={{ width: '32px' }} fontSize='small' />
          Подробнее в App Store
        </Button>

        <Button
          className={classes.button}
          disableRipple
          href='https://app.appsflyer.com/com.idamob.tinkoff.android?pid=tinkoff.ru&c=page_main_button_desktop&af_cost_model=prm.unp'
          variant='text'>
          <GooglePlayIcon />
          Подробнее в Google Play
        </Button>
      </div>
    </div>
  );
};

const GooglePlayIcon: React.FC = () => (
  <svg width='32' xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 48 48'>
    <path
      d='M16 33.492V14.508c0-.66.375-1.24.925-1.508l10.852 11-10.852 11A1.686 1.686 0 0 1 16 33.492zm15.215-6.008L19.36 34.43l9.354-9.48 2.5 2.534zm3.69-4.813c.375.302.65.77.65 1.329a1.65 1.65 0 0 1-.627 1.318l-2.523 1.474L29.65 24l2.755-2.792 2.5 1.463zM19.36 13.57l11.855 6.946-2.501 2.535-9.354-9.481z'
      fill='currentColor'
      stroke='none'></path>
  </svg>
);
