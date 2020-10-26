import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";

export const Main: React.FC = () => {
  return (
    <div>
      <Header/>

      <section>
        <h2>Рассчитайте доходность вклада</h2>

        <div>
          <header>
            <ul>
              <li>Калькулятор</li>
              <li>Все ставки</li>
            </ul>
          </header>

          <div>
            <div>
              Тут калькулятор
            </div>

            <div>
              тут все ставки
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Преимущества вкладов</h2>

        <div>
          <div>
            <div>
              <svg xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 60 60'>
                <path
                  className='icon__stroke' stroke-width='1.5'
                  d='M30 .75C13.846.75.75 13.846.75 30 .75 46.155 13.845 59.25 30 59.25S59.25 46.155 59.25 30C59.25 13.846 46.154.75 30 .75z M14.761 23.469V21.64c0-.487.19-.914.57-1.28a1.86 1.86 0 0 1 1.332-.549h27.57c.54 0 .983.183 1.332.549.38.366.57.793.57 1.28v17.371c0 .519-.19.945-.57 1.28-.35.366-.792.549-1.331.549H16.663a1.86 1.86 0 0 1-1.331-.549 1.631 1.631 0 0 1-.57-1.28v-1.828 M36.248 26.029c1.235 0 2.281.411 3.137 1.234.887.853 1.33 1.874 1.33 3.063 0 1.188-.443 2.194-1.33 3.017-.856.853-1.902 1.28-3.137 1.28-1.236 0-2.298-.427-3.185-1.28-.856-.823-1.284-1.829-1.284-3.017 0-1.189.428-2.21 1.284-3.063.887-.823 1.949-1.234 3.185-1.234v2.834m-21.487 5.943v-8.96'
                  style={ {
                    fill: '#fff', stroke: 'rgb(84, 133, 184)'
                  } }/>
              </svg>
            </div>
            <div>
              Пополняйте вклад, чтобы увеличить его доход
            </div>
          </div>
          <div>
            <div>
              <svg xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 60 60'>
                <path
                  className='icon__stroke' stroke-width='1.5'
                  d='M30 .75C13.846.75.75 13.846.75 30 .75 46.155 13.845 59.25 30 59.25S59.25 46.155 59.25 30C59.25 13.846 46.154.75 30 .75z M14.761 23.469V21.64c0-.487.19-.914.57-1.28a1.86 1.86 0 0 1 1.332-.549h27.57c.54 0 .983.183 1.332.549.38.366.57.793.57 1.28v17.371c0 .519-.19.945-.57 1.28-.35.366-.792.549-1.331.549H16.663a1.86 1.86 0 0 1-1.331-.549 1.631 1.631 0 0 1-.57-1.28v-1.828 M36.248 26.029c1.235 0 2.281.411 3.137 1.234.887.853 1.33 1.874 1.33 3.063 0 1.188-.443 2.194-1.33 3.017-.856.853-1.902 1.28-3.137 1.28-1.236 0-2.298-.427-3.185-1.28-.856-.823-1.284-1.829-1.284-3.017 0-1.189.428-2.21 1.284-3.063.887-.823 1.949-1.234 3.185-1.234v2.834m-21.487 5.943v-8.96'
                  style={ {
                    fill: '#fff', stroke: 'rgb(84, 133, 184)'
                  } }/>
              </svg>
            </div>
            <div>
              Получайте проценты каждый месяц — на вклад или карту
            </div>
          </div>
          <div>
            <div>
              <svg xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 60 60'>
                <path
                  className='icon__stroke' stroke-width='1.5'
                  d='M30 .75C13.846.75.75 13.846.75 30 .75 46.155 13.845 59.25 30 59.25S59.25 46.155 59.25 30C59.25 13.846 46.154.75 30 .75z M14.761 23.469V21.64c0-.487.19-.914.57-1.28a1.86 1.86 0 0 1 1.332-.549h27.57c.54 0 .983.183 1.332.549.38.366.57.793.57 1.28v17.371c0 .519-.19.945-.57 1.28-.35.366-.792.549-1.331.549H16.663a1.86 1.86 0 0 1-1.331-.549 1.631 1.631 0 0 1-.57-1.28v-1.828 M36.248 26.029c1.235 0 2.281.411 3.137 1.234.887.853 1.33 1.874 1.33 3.063 0 1.188-.443 2.194-1.33 3.017-.856.853-1.902 1.28-3.137 1.28-1.236 0-2.298-.427-3.185-1.28-.856-.823-1.284-1.829-1.284-3.017 0-1.189.428-2.21 1.284-3.063.887-.823 1.949-1.234 3.185-1.234v2.834m-21.487 5.943v-8.96'
                  style={ {
                    fill: '#fff', stroke: 'rgb(84, 133, 184)'
                  } }/>
              </svg>
            </div>
            <div>
              Необязательно ждать закрытия вклада, чтобы снять часть денег
            </div>
          </div>
          <div>
            <div>
              <svg xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 60 60'>
                <path
                  className='icon__stroke' stroke-width='1.5'
                  d='M30 .75C13.846.75.75 13.846.75 30 .75 46.155 13.845 59.25 30 59.25S59.25 46.155 59.25 30C59.25 13.846 46.154.75 30 .75z M14.761 23.469V21.64c0-.487.19-.914.57-1.28a1.86 1.86 0 0 1 1.332-.549h27.57c.54 0 .983.183 1.332.549.38.366.57.793.57 1.28v17.371c0 .519-.19.945-.57 1.28-.35.366-.792.549-1.331.549H16.663a1.86 1.86 0 0 1-1.331-.549 1.631 1.631 0 0 1-.57-1.28v-1.828 M36.248 26.029c1.235 0 2.281.411 3.137 1.234.887.853 1.33 1.874 1.33 3.063 0 1.188-.443 2.194-1.33 3.017-.856.853-1.902 1.28-3.137 1.28-1.236 0-2.298-.427-3.185-1.28-.856-.823-1.284-1.829-1.284-3.017 0-1.189.428-2.21 1.284-3.063.887-.823 1.949-1.234 3.185-1.234v2.834m-21.487 5.943v-8.96'
                  style={ {
                    fill: '#fff', stroke: 'rgb(84, 133, 184)'
                  } }/>
              </svg>
            </div>
            <div>
              Копите в рублях, долларах, евро или во всех валютах одновременно
            </div>
          </div>
          <div>
            <div>
              <svg xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 60 60'>
                <path
                  className='icon__stroke' stroke-width='1.5'
                  d='M30 .75C13.846.75.75 13.846.75 30 .75 46.155 13.845 59.25 30 59.25S59.25 46.155 59.25 30C59.25 13.846 46.154.75 30 .75z M14.761 23.469V21.64c0-.487.19-.914.57-1.28a1.86 1.86 0 0 1 1.332-.549h27.57c.54 0 .983.183 1.332.549.38.366.57.793.57 1.28v17.371c0 .519-.19.945-.57 1.28-.35.366-.792.549-1.331.549H16.663a1.86 1.86 0 0 1-1.331-.549 1.631 1.631 0 0 1-.57-1.28v-1.828 M36.248 26.029c1.235 0 2.281.411 3.137 1.234.887.853 1.33 1.874 1.33 3.063 0 1.188-.443 2.194-1.33 3.017-.856.853-1.902 1.28-3.137 1.28-1.236 0-2.298-.427-3.185-1.28-.856-.823-1.284-1.829-1.284-3.017 0-1.189.428-2.21 1.284-3.063.887-.823 1.949-1.234 3.185-1.234v2.834m-21.487 5.943v-8.96'
                  style={ {
                    fill: '#fff', stroke: 'rgb(84, 133, 184)'
                  } }/>
              </svg>
            </div>
            <div>
              Закрывайте вклад в онлайне и выбирайте, как получить деньги
            </div>
          </div>
          <div>
            <div>
              <svg xmlns='http://www.w3.org/2000/svg' focusable='false' viewBox='0 0 60 60'>
                <path
                  className='icon__stroke' stroke-width='1.5'
                  d='M30 .75C13.846.75.75 13.846.75 30 .75 46.155 13.845 59.25 30 59.25S59.25 46.155 59.25 30C59.25 13.846 46.154.75 30 .75z M14.761 23.469V21.64c0-.487.19-.914.57-1.28a1.86 1.86 0 0 1 1.332-.549h27.57c.54 0 .983.183 1.332.549.38.366.57.793.57 1.28v17.371c0 .519-.19.945-.57 1.28-.35.366-.792.549-1.331.549H16.663a1.86 1.86 0 0 1-1.331-.549 1.631 1.631 0 0 1-.57-1.28v-1.828 M36.248 26.029c1.235 0 2.281.411 3.137 1.234.887.853 1.33 1.874 1.33 3.063 0 1.188-.443 2.194-1.33 3.017-.856.853-1.902 1.28-3.137 1.28-1.236 0-2.298-.427-3.185-1.28-.856-.823-1.284-1.829-1.284-3.017 0-1.189.428-2.21 1.284-3.063.887-.823 1.949-1.234 3.185-1.234v2.834m-21.487 5.943v-8.96'
                  style={ {
                    fill: '#fff', stroke: 'rgb(84, 133, 184)'
                  } }/>
              </svg>
            </div>
            <div>
              Вклады до 1,4 млн застрахованы в государственной системе страхования вкладов
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Копите в нескольких валютах</h2>

        <p>Откройте мультивалютный вклад, чтобы распределить свои вложения.
          Это до 4 счетов в разных валютах внутри одного вклада</p>

        <div>
          <div>
            <picture className='ProductPicture__picture_a35mCt' data-qa-file='ProductPicture'>
              <source
                className='ProductPicture__image_b35mCt'
                srcSet='https://www.cdn-tinkoff.ru/portal/products/deposit/overview/multicurrency.webp, https://www.cdn-tinkoff.ru/portal/products/deposit/overview/multicurrency@2x.webp 2x'
                type='image/webp' data-qa-file='ProductPicture'/>
              <img
                className='ProductPicture__image_b35mCt ProductPicture__imageFit_c35mCt'
                src='https://www.cdn-tinkoff.ru/portal/products/deposit/overview/multicurrency.jpg'
                srcSet='https://www.cdn-tinkoff.ru/portal/products/deposit/overview/multicurrency.jpg, https://www.cdn-tinkoff.ru/portal/products/deposit/overview/multicurrency@2x.jpg 2x'
                data-qa-file='ProductPicture'/>
            </picture>
          </div>
          <div>
            <ul>
              <li>Копите сразу в рублях, долларах, евро и фунтах стерлингов, чтобы скачки валют не отразились на вашем вкладе</li>
              <li>Конвертируйте деньги внутри вклада, не теряя накопленных процентов. Без комиссии и по курсу, максимально близкому к биржевому</li>
              <li>Выбирайте, куда начислять проценты по каждой валюте — на вклад или валютную карту</li>
              <li>Превратите обычный вклад в мультивалютный и добавляйте новую валюту в любой момент</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Дебетовая карта от заботливого банка</h2>

        <p>С нашей дебетовой картой проще расплачиваться и копить деньги. Банк всегда рядом: в смартфоне, на планшете и на компьютере.</p>

        <div>
          <div>
            <div>
              <picture className='ProductPicture__picture_a35mCt' data-qa-file='ProductPicture'>
                <img
                  alt='Системы оплаты' className='ProductPicture__image_b35mCt ProductPicture__imageFit_c35mCt'
                  src='https://www.cdn-tinkoff.ru/portal/aca/samsungpay.png' data-qa-file='ProductPicture'/></picture>
            </div>

            <div>
              <p><Link to='/cards/debit-cards/tinkoff-black/'>Дебетовая карта с кэшбэком</Link></p>

              <p>
                Бесплатное обслуживание, выпуск и доставка. Привяжите карту к Apple Pay, Google Pay или Samsung Pay, чтобы оплачивать покупки смартфоном </p>

              <p>
                <span>Накопительный счет с 3,14% годовых</span>
                <br/>
                Открывайте для разных целей и в качестве копилки. Пополняйте и снимайте деньги в любой момент, не теряя накопленные проценты.
              </p>
            </div>
          </div>

          <div>
            <picture className='ProductPicture__picture_a35mCt' data-qa-file='ProductPicture'>
              <source
                className='ProductPicture__image_b35mCt'
                srcSet='https://www.cdn-tinkoff.ru/portal/products/deposit/overview/iphone-white.webp, https://www.cdn-tinkoff.ru/portal/products/deposit/overview/iphone-white@2x.webp 2x'
                type='image/webp' data-qa-file='ProductPicture'/>
              <img
                alt='Мобильное приложение Tinkoff'
                className='ProductPicture__image_b35mCt ProductPicture__imageFit_c35mCt'
                src='https://www.cdn-tinkoff.ru/portal/products/deposit/overview/iphone-white.png'
                srcSet='https://www.cdn-tinkoff.ru/portal/products/deposit/overview/iphone-white.png, https://www.cdn-tinkoff.ru/portal/products/deposit/overview/iphone-white@2x.png 2x'
                data-qa-file='ProductPicture'/>
            </picture>
          </div>

          <div>
            <div>
              <picture className='ProductPicture__picture_a35mCt' data-qa-file='ProductPicture'>
                <source
                  className='ProductPicture__image_b35mCt'
                  srcSet='https://www.cdn-tinkoff.ru/portal/products/deposit/overview/currency.webp, https://www.cdn-tinkoff.ru/portal/products/deposit/overview/currency@2x.webp 2x'
                  type='image/webp' data-qa-file='ProductPicture'/>
                <img
                  alt='Валюты' className='ProductPicture__image_b35mCt ProductPicture__imageFit_c35mCt'
                  src='https://www.cdn-tinkoff.ru/portal/products/deposit/overview/currency.jpg'
                  srcSet='https://www.cdn-tinkoff.ru/portal/products/deposit/overview/currency.jpg, https://www.cdn-tinkoff.ru/portal/products/deposit/overview/currency@2x.jpg 2x'
                  data-qa-file='ProductPicture'/>
              </picture>
            </div>

            <div>
              <p><Link to='/apps/'>Дебетовая карта с кэшбэком</Link></p>

              <p>по версии агентства Markswebb</p>

              <p> Пополняйте вклад, следите за доходностью и задавайте любые вопросы в онлайн-чате. </p>

              <p>
                <span>Выгодный курс конвертации валют</span>
                <br/>
                Переводите деньги внутри вклада из одной валюты в другую по курсу, максимально приближенному к биржевому — с 10:00 до 18:30 по Москве.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Открыть вклад</h2>

        <div>
          <div>
            <div>
              <span>1</span>
            </div>
            <p>Оформите заявку на открытие вклада — укажите свои данные и параметры вклада</p>
          </div>

          <div>
            <div>
              <span>2</span>
            </div>
            <p>Если у вас еще нет карты Тинькофф, представитель банка доставит договор и карту в удобное время</p>
          </div>

          <div>
            <div>
              <span>3</span>
            </div>
            <p>Пополните вклад банковским переводом или наличными через сеть партнеров</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Заполните общую информацию (шаг 1 из 2)</h2>
      </section>
    </div>
  );
};