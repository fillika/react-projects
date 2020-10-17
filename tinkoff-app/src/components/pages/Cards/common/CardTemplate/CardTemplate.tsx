import React from "react";
import { Button, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import clsx from "clsx";

export const CardTemplate: React.FC = () => {
  const { breakpoints } = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(breakpoints.up('lg'));

  return (
    <div className={ clsx(classes.wrapper, classes.grayBg, classes.wrapperHover) }>
      <span style={ { position: 'absolute', top: 0, lineHeight: 0, } }>
        <span className={ classes.description }>Наша лучшая кредитная карта</span>
      </span>

      {
        matches
          ? <Desktop/>
          : <Mobile/>
      }
    </div>
  );
};

const Desktop: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={ classes.imageWrapper }>
        <picture>
          <source
            srcSet='https://acdn.tinkoff.ru/static/pages/files/0c9ab3d5-8e35-4223-a8fe-16c4c981b352.webp 1x, https://acdn.tinkoff.ru/static/pages/files/bf1ca0d5-b9ee-47cd-bb7d-0e236ba55721.webp 2x'
            type='image/webp' media='(min-width: 1360px)'/>
          <source
            srcSet='https://acdn.tinkoff.ru/static/pages/files/2f768141-e854-4913-a8d1-dbc3a62aedae.png 1x, https://acdn.tinkoff.ru/static/pages/files/23bba29f-bdc3-44df-994a-9e9b07993ff8.png 2x'
            media='(min-width: 1360px)'/>
          <source
            srcSet='https://acdn.tinkoff.ru/static/pages/files/3569ea9b-a916-4aeb-902c-bc849f017aa2.webp 1x, https://acdn.tinkoff.ru/static/pages/files/25c8968b-96a0-4504-8c8c-8dae4c0638bf.webp 2x'
            type='image/webp' media='(max-width: 1360px)'/>
          <img
            loading='lazy' src='https://acdn.tinkoff.ru/static/pages/files/a753ed8e-6d89-4730-8eb2-997c5edf7c24.png'
            srcSet='https://acdn.tinkoff.ru/static/pages/files/3e0c26f7-e20c-44e4-b913-6019b2b194c6.png 2x'
            alt='Кредитная карта'/>
        </picture>
      </div>

      <div className={ classes.textWrapper }>
        <div className={ classes.textInnerWrapper }>
          <div className={ classes.titlesWrapper }>
            <Typography className={ classes.title } variant='h1'>Кредитная карта Тинькофф Платинум</Typography>

            <Typography
              className={ classes.about }>Наша лучшая кредитная карта. Подходит для повседневных трат и&nbsp;покупок в&nbsp;рассрочку. Одобрим&nbsp;за&nbsp;2&nbsp;минуты, доставим бесплатно</Typography>
          </div>

          <div style={ { display: 'flex' } }>
            <div style={ { width: '33.33%' } }>
              <h6 className={classes.h6}>До 700 000 ₽</h6>
              <p className={ classes.smallSubtitle }>Кредитный лимит</p>
            </div>

            <div style={ { width: '33.33%' } }>
              <h6 className={classes.h6}>0% до 12 мес.</h6>
              <p className={ classes.smallSubtitle }>Рассрочка у партнеров</p>
            </div>

            <div style={ { width: '33.33%' } }>
              <h6 className={classes.h6}>590 ₽ в год</h6>
              <p className={ classes.smallSubtitle }>Стоимость обслуживания</p>
            </div>
          </div>

          <div style={ { marginTop: 'auto', paddingTop: '24px' } }>
            <Button className={ classes.formToCard } variant='contained' color='primary'>
              <Link to='/cards/credit-cards/tinkoff-platinum/#form'>Оформить карту</Link>
            </Button>

            <Button className={ classes.learnMoreButton } variant='text'>
              <Link to='/cards/credit-cards/tinkoff-platinum/'>Подробнее о карте</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const Mobile: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div style={ { padding: '40px 24px 24px' } }>
        <Typography className={ classes.title } variant='h1'>Кредитная карта Тинькофф&nbsp;Платинум</Typography>
        <Typography className={ classes.about }>Подходит для повседневных трат и покупок в рассрочку</Typography>

        <ul className={classes.mobileList}>
          <li><strong>До&nbsp;700&nbsp;000&nbsp;₽</strong>&nbsp;&mdash; кредитный лимит</li>
          <li><strong>0%&nbsp;рассрочка</strong> до&nbsp;года у&nbsp;партнеров</li>
          <li><strong>590&nbsp;₽ в&nbsp;год</strong> за&nbsp;обслуживание карты</li>
        </ul>

        <div style={ { marginTop: 'auto', paddingTop: '24px' } }>
          <Button className={ classes.formToCard } variant='contained' color='primary'>
            <Link to='/cards/credit-cards/tinkoff-platinum/#form'>Оформить карту</Link>
          </Button>

          <Button
            className={ classes.learnMoreButton } variant='text'>
            <Link to='/cards/credit-cards/tinkoff-platinum/'>Подробнее</Link>
          </Button>
        </div>
      </div>

      <div style={ { paddingLeft: '24px', lineHeight: 0, paddingRight: '24px' } }>
        <picture>
          <source
            srcSet='https://acdn.tinkoff.ru/static/pages/files/47444801-cde9-4361-a492-5eee734aaeb6.webp 1x, https://acdn.tinkoff.ru/static/pages/files/5b55d07c-d3d4-4cd8-95f6-f842dba4bb2c.webp 2x'
            type='image/webp'/>
          <img
            loading='lazy' src='https://acdn.tinkoff.ru/static/pages/files/ab43fcbc-2591-4638-bba5-fed6882cadcb.png'
            srcSet='https://acdn.tinkoff.ru/static/pages/files/c79b810f-ba04-4011-8896-24bf0a41b9d6.png 2x'
            alt='Кредитная карта'/>
        </picture>
      </div>
    </>
  );
};
