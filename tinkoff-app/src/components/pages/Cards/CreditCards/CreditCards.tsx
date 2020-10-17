import React from "react";
import { Container } from "@material-ui/core";
import { CardTemplate } from "../common/CardTemplate";
import { IData } from "../common/CardTemplate/types";

export const CreditCards: React.FC = () => {
  return (
    <Container>
      <div style={ { fontSize: '13px', padding: '16px 0', lineHeight: '20px' } }>
        <p>Кредитная карта — лучший способ получить кредит до
          2&nbsp;000&nbsp;000&nbsp;₽ с удобными условиями и доставкой. <span>Узнать больше</span></p>

        <p>
          <span style={ { color: "#666" } }><strong>Кредитная карта </strong></span>
          <span
            style={ { color: "#909090" } }>— лучший способ получить кредит до 2&nbsp;000&nbsp;000 ₽ с&nbsp;удобными
            условиями и&nbsp;доставкой в&nbsp;любую точку России.
            Тинькофф Банк одобрит кредитную карту за&nbsp;2&nbsp;минуты по&nbsp;паспорту и&nbsp;доставит
            ее&nbsp;бесплатно на&nbsp;дом за&nbsp;2&nbsp;дня. Оплачивайте покупки, не&nbsp;платите проценты
            до&nbsp;55 дней и&nbsp;получайте бонусы за&nbsp;каждую покупку по&nbsp;карте. Годовое обслуживание&nbsp;—
            от&nbsp;590&nbsp;₽. Бесплатное пополнение банковским переводом или у&nbsp;партнеров Тинькофф Банка.</span>
        </p>
      </div>

      <CardTemplate desktop={ mainCard.desktop } mobile={ mainCard.mobile } isMain={ true }/>
      <CardTemplate desktop={ mainCard.desktop } mobile={ mainCard.mobile } isMain={ false }/>
    </Container>
  );
};

const mainCard: IData = {
  desktop: {
    img: {
      alt: 'Кредитная карта',
      min1360webp: 'https://acdn.tinkoff.ru/static/pages/files/2f768141-e854-4913-a8d1-dbc3a62aedae.png 1x, https://acdn.tinkoff.ru/static/pages/files/23bba29f-bdc3-44df-994a-9e9b07993ff8.png 2x',
      min1360: 'https://acdn.tinkoff.ru/static/pages/files/0c9ab3d5-8e35-4223-a8fe-16c4c981b352.webp 1x, https://acdn.tinkoff.ru/static/pages/files/bf1ca0d5-b9ee-47cd-bb7d-0e236ba55721.webp 2x',
      max1360webp: 'https://acdn.tinkoff.ru/static/pages/files/3569ea9b-a916-4aeb-902c-bc849f017aa2.webp 1x, https://acdn.tinkoff.ru/static/pages/files/25c8968b-96a0-4504-8c8c-8dae4c0638bf.webp 2x',
      src: 'https://acdn.tinkoff.ru/static/pages/files/a753ed8e-6d89-4730-8eb2-997c5edf7c24.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/3e0c26f7-e20c-44e4-b913-6019b2b194c6.png 2x',
    },
    title: 'Кредитная карта Тинькофф Платинум',
    about: 'Наша лучшая кредитная карта. Подходит для повседневных трат и&nbsp;покупок в&nbsp;рассрочку. Одобрим&nbsp;за&nbsp;2&nbsp;минуты, доставим бесплатно',
    list: [
      {
        itemTitle: 'До 700 000 ₽',
        itemSubtitle: 'Кредитный лимит'
      },
      {
        itemTitle: '0% до 12 мес.',
        itemSubtitle: 'Рассрочка у партнеров'
      },
      {
        itemTitle: '590 ₽ в год',
        itemSubtitle: 'Стоимость обслуживания'
      },
    ],
    formButton: {
      href: '/cards/credit-cards/tinkoff-platinum/#form',
      text: 'Оформить карту'
    },
    learnMoreButton: {
      href: '/cards/credit-cards/tinkoff-platinum/',
      text: 'Подробнее о карте'
    },
  },
  mobile: {
    img: {
      webp: 'https://acdn.tinkoff.ru/static/pages/files/47444801-cde9-4361-a492-5eee734aaeb6.webp 1x, https://acdn.tinkoff.ru/static/pages/files/5b55d07c-d3d4-4cd8-95f6-f842dba4bb2c.webp 2x',
      src: 'https://acdn.tinkoff.ru/static/pages/files/ab43fcbc-2591-4638-bba5-fed6882cadcb.png',
      srcSet: 'https://acdn.tinkoff.ru/static/pages/files/c79b810f-ba04-4011-8896-24bf0a41b9d6.png 2x',
      alt: 'Кредитная карта',
    },
    title: 'Кредитная карта Тинькофф&nbsp;Платинум',
    about: 'Подходит для повседневных трат и покупок в рассрочку',
    list: [
      '<strong>До&nbsp;700&nbsp;000&nbsp;₽</strong>&nbsp;&mdash; кредитный лимит',
      '<strong>0%&nbsp;рассрочка</strong> до&nbsp;года у&nbsp;партнеров',
      '<strong>590&nbsp;₽ в&nbsp;год</strong> за&nbsp;обслуживание карты',
    ],
    formButton: {
      href: '/cards/credit-cards/tinkoff-platinum/#form',
      text: 'Оформить карту'
    },
    learnMoreButton: {
      href: '/cards/credit-cards/tinkoff-platinum/',
      text: 'Подробнее'
    },
  }
};