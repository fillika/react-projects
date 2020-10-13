import React from 'react';

import { TextContent } from './TextContent';

import { Container, useTheme, useMediaQuery } from '@material-ui/core';
import { useStyles } from './style';
import { AllApps } from './AllApps';

export const BestMobileApp: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  if (!matches) {
    return null;
  }

  return (
    <>
      <div className={classes.wrapper}>
        <Container className={classes.container}>
          <TextContent />

          <div className={classes.imageWrapper}>
            <picture>
              <source
                srcSet='https://acdn.tinkoff.ru/static/pages/files/6c908b3f-7077-4c7e-b4ff-96fe6360f13a.webp 1x, https://acdn.tinkoff.ru/static/pages/files/ee548e79-7ddc-42c7-9b08-50a0dde15b53.webp 2x'
                type='image/webp'
              />
              <img
                loading='lazy'
                src='https://acdn.tinkoff.ru/static/pages/files/a38fbdb4-62be-46fc-aaa6-28d02c252c44.png'
                srcSet='https://acdn.tinkoff.ru/static/pages/files/70543105-d99f-4e17-bd83-b8c31714ab15.png 2x'
                alt='Мобильный банк Тинькофф'
              />
            </picture>
          </div>
        </Container>
      </div>

      <AllApps />
    </>
  );
};
