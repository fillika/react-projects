import React from "react";
import { useStyle } from './style';

export const Award: React.FC = () => {
  const classes = useStyle();

  return (
    <div className={ classes.text }>
      <p
        style={ { marginBottom: '16px' } }>Best Digital Bank Award 2018&nbsp;&mdash; по&nbsp;версии журнала Global Finance (Глобал Финанс)
        2018г.&nbsp;по&nbsp;критериям: стратегия онлайн привлечения и&nbsp;обслуживания клиентов,
        успешное привлечение клиентов с&nbsp;помощью цифровых предложений, рост клиентов, ассортимент
        продуктов, получение выгоды от&nbsp;цифровых инициатив, дизайн сайта и&nbsp;его функциональность. </p>

      <p>АО&nbsp;&laquo;Тинькофф Банк&raquo; <a
        className={ classes.link } rel='noopener noreferrer' target='_blank'
        href='https://acdn.tinkoff.ru/static/pages/files/61816cfb-15e5-43ff-b58d-c7d33a91aca2.pdf'>
        использует файлы &laquo;cookie&raquo;
      </a>,
        с&nbsp;целью персонализации сервисов и&nbsp;повышения удобства пользования веб-сайтом.
        &laquo;Cookie&raquo; представляют собой небольшие файлы, содержащие информацию
        о&nbsp;предыдущих посещениях веб-сайта. Если вы&nbsp;не&nbsp;хотите использовать
        файлы &laquo;cookie&raquo;, измените настройки браузера. </p>
    </div>);
};