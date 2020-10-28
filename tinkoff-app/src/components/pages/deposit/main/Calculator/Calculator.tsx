import React, { FC } from "react";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import { InputSum } from "./InputSum";

export const Calculator: FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <section>
        <header>
          <Typography variant='h2'>Рассчитайте доходность вклада</Typography>
          <ul>
            <li>Калькулятор</li>
            <li>Все ставки</li>
          </ul>
        </header>

        <div>
          <div>

            <div>
              <InputSum/>
              <InputSum/>

              <div>
                <input type='text' placeholder='50 000 ₽' defaultValue='' id='date'/>
                <label htmlFor='date'>От 3 мес. до 24 мес.</label>
              </div>

              <div>
                <select>
                  <option defaultValue='Рубли РФ'>Рубли РФ</option>
                  <option defaultValue='Доллары США'>Доллары США</option>
                  <option defaultValue='Евро'>Евро</option>
                </select>
              </div>
            </div>

          </div>

          <div>
            тут все ставки
          </div>
        </div>
      </section>
    </Container>
  );
};