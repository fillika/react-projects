import React from 'react';
import { Typography, Button, createStyles, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      backgroundColor: theme.palette.grey[500],
      paddingTop: theme.spacing(2),
    },
    textWrapper: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
      textAlign: 'center',
    },
    h1: {
      fontSize: '1rem',
    },
    title: {
      color: 'rgba(0,0,0,.8)',
      fontSize: '1.2em',
      fontWeight: 700,
    },
    subTitle: {
      fontSize: '0.75em',
      marginTop: theme.spacing(2),
    },
    imageWrapper: {
      height: '328px',
      overflow: 'hidden',
      position: 'relative',
    },
    image: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    buttonWrapper: {
      position: 'absolute',
      bottom: theme.spacing(4),
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    button: {
      fontSize: '0.75em',
      textTransform: 'initial',
      paddingTop: theme.spacing(1) + 1,
      paddingLeft: theme.spacing(3) - 1,
      paddingRight: theme.spacing(3) - 1,
      paddingBottom: theme.spacing(1) - 1,
      fontWeight: 400,
    },
  })
);

export const MobileContent: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.textWrapper}>
        <Typography className={classes.h1} variant='h1'>
          <Typography className={classes.title}>Счет для бизнеса</Typography>
        </Typography>

        <Typography className={classes.subTitle}>
          До 3% на остаток. Открытие и обслуживание счета — от 0 рублей. Все онлайн
        </Typography>
      </div>

      <div className={classes.imageWrapper}>
        <picture className={classes.image}>
          <source
            srcSet='https://acdn.tinkoff.ru/static/pages/files/dde9e3e2-be0a-4689-a332-37f5b75c4e2f.webp 1x, https://acdn.tinkoff.ru/static/pages/files/7f093359-43b4-4b02-a3b9-283ea151d5d7.webp 2x'
            type='image/webp'
            media='(max-width: 768px)'
          />
          <img
            alt='Мужчина с котенком'
            loading='lazy'
            src='https://acdn.tinkoff.ru/static/pages/files/918e68e9-a79c-4313-a676-ef51ecf21e1c.png'
            srcSet='https://acdn.tinkoff.ru/static/pages/files/9ac19c7b-69d8-489f-b19c-1d578b53f7ad.png 2x'
          />
        </picture>

        <div className={classes.buttonWrapper}>
          <Button className={classes.button} variant='contained' color='primary'>
            Открыть счет
          </Button>
        </div>
      </div>
    </Container>
  );
};
