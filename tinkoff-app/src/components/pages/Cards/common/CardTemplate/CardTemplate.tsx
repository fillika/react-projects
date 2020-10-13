import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import clsx from "clsx";

export const CardTemplate: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={ clsx(classes.wrapper, classes.mainProduct, classes.wrapperHover) }>
      <div className={ classes.imageWrapper }>
        <span>
          <span className={ classes.description }>Наша лучшая кредитная карта</span>
        </span>
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

      <div>
        <div>
          <Typography variant='h4'>Кредитная карта Тинькофф Платинум</Typography>

          <Typography>Наша лучшая кредитная карта. Подходит для повседневных трат и&nbsp;покупок в&nbsp;рассрочку. Одобрим&nbsp;за&nbsp;2&nbsp;минуты, доставим бесплатно</Typography>
        </div>

        <div>
          <div>
            <p>До 700 000 ₽</p>
            <p>Кредитный лимит</p>
          </div>
          <div>
            <p>0% до 12 мес.</p>
            <p>Рассрочка у партнеров</p>
          </div>
          <div>
            <p>590 ₽ в год</p>
            <p>Стоимость обслуживания</p>
          </div>
        </div>

        <div>
          <Button variant='contained' color='primary'>
            <Link to='/cards/credit-cards/tinkoff-platinum/#form'>Оформить карту</Link>
          </Button>

          <Button variant='outlined'>
            <Link to='/cards/credit-cards/tinkoff-platinum/'>Подробнее о карте</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};