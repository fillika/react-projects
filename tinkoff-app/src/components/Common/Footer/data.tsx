import { TNavigation } from "./types";

export const tinkoffLinksMenuLinks: TNavigation[] = [
  {
    id: '1b',
    headLink: {
      to: '/about/',
      name: 'Тинькофф'
    },
    listLink: [
      {
        to: '/about/',
        name: 'О банке'
      },
      {
        to: '/about/news/',
        name: 'Новости'
      },
      {
        to: '/career/',
        name: 'Работа'
      },
      {
        to: '/maps/payment/?partner=TINKOFF',
        name: 'Точки пополнения'
      },
      {
        to: '/maps/atm/?partner=tcs',
        name: 'Банкоматы'
      },
      {
        to: '/about/exchange/',
        name: 'Курсы валют'
      },
      {
        to: '/contacts/',
        name: 'Контакты'
      },
      {
        isLink: true,
        to: 'https://help.tinkoff.ru/',
        name: 'Помощь'
      },
      {
        to: '/secure/',
        name: 'Безопасность'
      },
      {
        isLink: true,
        to: 'https://www.tinkoffgroup.com/',
        name: 'For investors'
      },
    ]
  },
];

export const navigationsLinks: TNavigation[] = [
  {
    id: '1a',
    headLink: {
      to: '/',
      name: 'Банк'
    },
    listLink: [
      {
        to: '/cards/credit-cards/',
        name: 'Кредитные карты'
      },
      {
        to: '/cards/debit-cards/',
        name: 'Дебетовые карты'
      },
      {
        to: '/tinkoff-premium/',
        name: 'Премиум'
      },
      {
        to: '/loans/cash-loan/',
        name: 'Кредит наличными'
      },
      {
        to: '/loans/refinance/',
        name: 'Рефинансирование'
      },
      {
        to: '/loans/auto-loan/',
        name: 'Автокредит'
      },
      {
        to: '/deposit/',
        name: 'Вклады'
      },
      {
        to: '/payments/',
        name: 'Платежи'
      }
    ]
  },
  {
    id: '2a',
    headLink: {
      to: '/business/',
      name: 'Бизнес'
    },
    listLink: [
      {
        to: '/business/account/',
        name: 'Расчетный счет'
      },
      {
        to: '/business/registration/',
        name: 'Регистрация бизнеса'
      },
      {
        to: '/business/premium/',
        name: 'Среднему бизнесу'
      },
      {
        to: '/business/payments/',
        name: 'Эквайринг'
      },
      {
        to: '/business/credit/',
        name: 'Кредиты'
      },
      {
        to: '/business/procurement/',
        name: 'Госзакупки'
      },
      {
        to: '/business/sales/',
        name: 'Продажи'
      },
      {
        to: '/business/reports/',
        name: 'Бухгалтерия'
      },
    ]
  },
  {
    id: '3a',
    headLink: {
      to: '/invest/',
      name: 'Инвестиции'
    },
    listLink: [
      {
        to: '/invest/feed/',
        name: 'Лента'
      },
      {
        to: '/invest/catalog/',
        name: 'Каталог'
      },
      {
        to: '/invest/recommendations/',
        name: 'Что купить'
      },
      {
        to: '/invest/premium/',
        name: 'Премиум'
      },
      {
        to: '/invest/account/',
        name: 'Брокерский счет'
      },
      {
        to: '/invest/iis/',
        name: 'ИИС'
      },
      {
        to: '/invest/tariffs/',
        name: 'Тарифы'
      },
    ]
  },
  {
    id: '4a',
    headLink: {
      to: '/insurance/',
      name: 'Страхование'
    },
    listLink: [
      {
        to: '/insurance/osago/',
        name: 'ОСАГО'
      },
      {
        to: '/insurance/kasko/',
        name: 'КАСКО'
      },
      {
        to: '/insurance/travel/',
        name: 'Путешествия'
      },
      {
        to: '/insurance/property/',
        name: 'Квартира и дом'
      },
      {
        to: '/insurance/health/',
        name: 'Здоровье'
      },
      {
        isLink: true,
        to: 'https://www.tinkoffinsurance.ru/login/',
        name: 'Личный кабинет'
      },
      {
        isLink: true,
        to: 'https://www.tinkoffinsurance.ru/ins/partners-product/',
        name: 'Партнерам'
      },
    ]
  },
  {
    id: '5a',
    headLink: {
      to: '/travel/flights/',
      name: 'Путешествия'
    },
    listLink: [
      {
        to: '/travel/flights/',
        name: 'Авиабилеты'
      },
      {
        to: '/travel/hotels/',
        name: 'Отели'
      },
      {
        to: '/travel/tours/',
        name: 'Туры'
      },
      {
        to: '/travel/trains/',
        name: 'Ж/д билеты'
      },
      {
        to: '/travel/rentalcars/',
        name: 'Аренда авто'
      },
      {
        to: '/travel/map/?isRussianFlight=true&showRegions=true',
        name: 'Куда лететь?'
      },
    ]
  },
  {
    id: '6a',
    headLink: {
      to: '/entertainment/',
      name: 'Развлечения'
    },
    listLink: [
      {
        to: '/entertainment/',
        name: 'Куда сходить'
      },
      {
        to: '/entertainment/movies/',
        name: 'Кино'
      },
      {
        to: '/entertainment/restaurants/',
        name: 'Рестораны'
      },
      {
        to: '/entertainment/concerts/',
        name: 'Концерты'
      },
      {
        to: '/entertainment/spectacles/',
        name: 'Театр'
      },
      {
        to: '/entertainment/sports/',
        name: 'Спорт'
      },
      {
        to: '/login/?redirectTo=%2Fentertainment%2Fbookings%2F&redirectType=',
        name: 'Мои заказы'
      },
    ]
  },
];