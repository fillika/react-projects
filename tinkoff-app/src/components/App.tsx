import React from 'react';

import { Header } from './Header';
import { MainAdvBlock } from './MainAdvBlock';
import { RecommendedProduct } from './RecommendedProduct';
import { BestMobileApp } from './BestMobileApp';
import { Services } from './Services';

export const App: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <MainAdvBlock />
        <RecommendedProduct />
        <BestMobileApp />
        <Services />
        {/* Тут будет еще несколько блоков */}
      </main>

      <footer>
        <div>
          <p>{/* <a href='tel:+78003337733'>8 800 333-77-33</a> */}</p>
          <p>Для звонков по всей России</p>
        </div>

        <div>Тут будут соц. сети</div>

        <div>
          <ul>
            <li>
              <p>{/* <a href='#'>Тинькофф</a> */}</p>
              <ul>
                <li>{/* <a href='#'>О банке</a> */}</li>
                <li>{/* <a href='#'>Новости</a> */}</li>
                <li>{/* <a href='#'>Работа</a> */}</li>
              </ul>
            </li>
            <li>{/* <a href='#'>Банк</a> */}</li>
            <li>{/* <a href='#'>Бизнес</a> */}</li>
          </ul>
        </div>

        <div>
          <h5>Информация</h5>
          <div>
            <ul>
              <li>
                {/* <a href='#'>
                  <span>Информация о лицах, под контроллем которых находится банк</span>
                </a> */}
              </li>
              <li>
                {/* <a href='#'>
                  <span>Информация о лицах, под контроллем которых находится банк</span>
                </a> */}
              </li>
              <li>
                {/* <a href='#'>
                  <span>Информация о лицах, под контроллем которых находится банк</span>
                </a> */}
              </li>
            </ul>
          </div>

          <div>
            <p>
              {/* АО «Тинькофф Банк» <a href='/privacy/'>использует файлы «cookie»,</a> с&nbsp;целью персонализации сервисов */}
              и&nbsp;повышения удобства пользования веб-сайтом. «Cookie» представляют собой небольшие файлы, содержащие
              информацию о&nbsp;предыдущих посещениях веб-сайта. Если вы&nbsp;не&nbsp;хотите использовать файлы
              «cookie», измените настройки браузера.
            </p>
          </div>

          <div>
            <p>© 2006–2020, АО «Тинькофф Банк», официальный сайт, лицензия ЦБ РФ № 2673</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
