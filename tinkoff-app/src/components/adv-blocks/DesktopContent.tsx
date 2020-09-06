import React from 'react';
import { Typography, Button, createStyles, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      position: 'relative',
      height: 448,
      '@media (min-width: 1360px)': {
        height: 480,
      },
    },
    textWrapper: {
      zIndex: 2,
      position: 'relative',
      paddingBottom: theme.spacing(7),
      paddingTop: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    h1: {
      fontSize: '1.3rem',
      width: 440,
    },
    title: {
      fontFamily: '"Fira Sans", sans-serif',
      color: 'rgba(0,0,0,.8)',
      fontSize: '1.7em',
      fontWeight: 400,
      lineHeight: 1.0909,
    },
    subTitle: {
      fontSize: '0.75em',
      marginTop: theme.spacing(3),
      width: 336,
    },
    imageWrapper: {
      height: 448,
      width: 1024,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: -theme.spacing(3),
      zIndex: 1,
      '@media (min-width: 1360px)': {
        left: -156,
        width: 1360,
        height: 480,
      },
    },
    button: {
      fontSize: '0.75em',
      textTransform: 'initial',
      paddingTop: theme.spacing(2) + 1,
      paddingLeft: theme.spacing(3) + 3,
      paddingRight: theme.spacing(3) + 3,
      paddingBottom: theme.spacing(2) - 2,
      fontWeight: 400,
      boxShadow: 'none',
    },
  })
);

export const DesktopContent: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.imageWrapper}>
          <picture>
            <source
              srcSet='https://acdn.tinkoff.ru/static/pages/files/ea723822-d5e8-4c34-9cf0-159dec5f76bc.webp 1x, https://acdn.tinkoff.ru/static/pages/files/63b6cdcc-7f5e-4f6b-a499-9ee218be67c2.webp 2x'
              type='image/webp'
              media='(min-width: 1360px)'
            />
            <source
              srcSet='https://acdn.tinkoff.ru/static/pages/files/f9eff401-773f-4f18-a373-7a858158a426.png 1x, https://acdn.tinkoff.ru/static/pages/files/667a9c55-0ced-4766-8d79-7ec32c358e15.png 2x'
              media='(min-width: 1360px)'
            />
            <source
              srcSet='https://acdn.tinkoff.ru/static/pages/files/4ad53bb5-7e4e-40cf-adef-1c5fc3bf4f88.webp 1x, https://acdn.tinkoff.ru/static/pages/files/e4e0004e-03be-400d-9118-f966b1572979.webp 2x'
              type='image/webp'
              media='(max-width: 1360px)'
            />
            <img
              alt='Мужчина с котенком'
              loading='lazy'
              src='https://acdn.tinkoff.ru/static/pages/files/918e68e9-a79c-4313-a676-ef51ecf21e1c.png'
              srcSet='https://acdn.tinkoff.ru/static/pages/files/9ac19c7b-69d8-489f-b19c-1d578b53f7ad.png 2x'
            />
          </picture>
        </div>

        <div className={classes.textWrapper}>
          <div style={{ flexGrow: 1 }}>
            <Typography className={classes.h1} variant='h1'>
              <Typography className={classes.title}>Счет для бизнеса</Typography>
            </Typography>

            <Typography className={classes.subTitle}>
              До 3% на остаток. Открытие и обслуживание счета — от 0 рублей. Все онлайн
            </Typography>
          </div>

          <div>
            <Button className={classes.button} variant='contained' color='primary'>
              Открыть счет
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
