import React from 'react';
import { Header } from './Header';
import { Typography, Container, Button } from '@material-ui/core';

export const App: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <div>
          <Container>
            <Typography variant='h1'>
              <Typography>Кредит наличными</Typography>
            </Typography>
            <Typography>До 15 млн рублей уже завтра</Typography>
            <p>Тут текст и картинка</p>

            <div style={{ height: '328px', overflow: 'hidden' }}>
              <Button
                style={{ fontFamily: 'Segoe UI', fontSize: '0.75em', textTransform: 'initial' }}
                variant='contained'
                color='primary'>
                Получить
              </Button>
            </div>
          </Container>
        </div>

        <div>
          <h2>Рекламный блок 2</h2>
          <p>Тут текст и картинка</p>
        </div>

        <div>
          <h2>Рекламный блок 3</h2>
          <p>Тут текст и картинка</p>
        </div>

        <div>
          <h2>Рекламный блок 4</h2>
          <p>Тут текст и картинка</p>
        </div>

        <div>
          <h2>Рекламный блок 5</h2>
          <p>Тут текст и картинка</p>
        </div>

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
