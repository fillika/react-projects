import React from "react";
import { useStyle } from "./style";
import { Link } from "react-router-dom";

export const Information: React.FC = () => {
  const classes = useStyle();

  return (
    <div className={ classes.wrapper }>
      <p className={ classes.title }>Информация</p>

      <a
        className={ classes.link } rel='noopener noreferrer' target='_blank'
        href='https://acdn.tinkoff.ru/static/documents/about-slkpkosvnrvub.pdf'>Информация о лицах, под
        контролем которых находится банк (информация о лицах, под контролем
        либо значительным влиянием которых находится кредитная организация соответствует
        информации, направленной в Банк России для размещения на официальном сайте
        Банка России 04.09.2020 г.)</a>

      <a
        className={ classes.link } rel='noopener noreferrer' target='_blank'
        href='https://e-disclosure.ru/portal/company.aspx?id=2989&attempt=1'>Центр раскрытия корпоративной информации</a>

      <Link
        className={ classes.link }
        to='/deposit/tariffs/#deptable'>Информация о максимальных процентных ставках по вкладам физических лиц</Link>

      <Link
        className={ classes.link }
        to='/about/documents/disclosure/'>Раскрытие информации профессиональным участником рынка ценных бумаг</Link>

      <Link
        className={ classes.link } to='/about/news/06102016-tinkoff-named-the-largest-digital-bank-RUS/'>
        Самый большой онлайн-банк в мире</Link>

      <Link
        className={ classes.link } to='/about/terms-changes-news/'>
        Новости об изменении условий продуктов и сервисов Банка</Link>

      <Link
        className={ classes.link } to='/about/sitemap/'>
        Карта сайта</Link>

      <a
        className={ classes.link } rel='noopener noreferrer' target='_blank'
        href='https://acdn.tinkoff.ru/static/pages/files/61816cfb-15e5-43ff-b58d-c7d33a91aca2.pdf'>
        Ограничения Дистанционного обслуживания</a>

      <Link
        className={ classes.link } to='/cards/debit-cards/tinkoff-black/form/distance/'>
        Удаленная идентификация</Link>

      <a
        className={ classes.link } rel='noopener noreferrer' target='_blank'
        href='https://acdn.tinkoff.ru/static/documents/information-features-conditions-credit-breaks.pdf'>
        Кредитные каникулы</a>
    </div>

  )
}