import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Typography, Button } from '@material-ui/core';

import { useStyles } from './style';
import { useCommonStyles } from '../../../../../commonStyles';

export const AllApps: React.FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <Container className={ classes.container }>
      <Link
        to='/apps/'
        className={ classes.linkWrapper }/>

      <div>
        <Typography variant='h4'>
          <p className={ classes.title }>Все мобильные приложения</p>
        </Typography>

        <p className={ classes.subtitle }>Сервисы Тинькофф всегда под рукой</p>

        <Button
          disableRipple
          className={ commonClasses.textButton }
          variant='text'>
          <Link
            className={ classes.link }
            to='/apps/'>
            Смотреть
          </Link>
        </Button>
      </div>

      <div className={ classes.imageWrapper }>
        <picture>
          <img
            className={ classes.image }
            loading='lazy'
            src='https://acdn.tinkoff.ru/static/pages/files/ccb3b784-5c40-4918-a29a-92e7430afd05.png'
            srcSet='https://acdn.tinkoff.ru/static/pages/files/a0610111-788a-40d6-b38b-e14a2aa2226a.png 2x'
            alt='Приложения Тинькофф'/>
        </picture>
      </div>
    </Container>
  );
};
