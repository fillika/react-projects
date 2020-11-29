import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Container, Typography, Select, MenuItem } from "@material-ui/core";
import { InputWithSlider } from "./InputWithSlider";
import { InputProps } from "./types";

export const Calculator: FC = () => {
  const [sum, setSum] = useState<number | number[] | string>(50000);
  const [month, setMonth] = useState<number | number[] | string>(3);
  const [currency, setCurrency] = React.useState('rub');

  const sumInputHandle = (event: FormEvent<any>, newValue: number | number[]) => setSum(newValue);
  const monthInputHandle = (event: FormEvent<any>, newValue: number | number[]) => setMonth(newValue);

  const blurSumHandle = (value: number | string, min: number) => {
    if (value) {
      value > min ? setSum(value) : setSum(min);
    } else {
      setSum(min);
    }
  };

  const blurMonthHandle = (value: number | string, min: number) => {
    if (value) {
      value > min ? setMonth(value) : setMonth(min);
    } else {
      setMonth(min);
    }
  };

  const sumSliderHandle = (event: ChangeEvent<HTMLInputElement>) => {
    /**
     * Получаю value, удаляю полученные пробелы, а потом приравниваю его к числу
     */
    let value: string | number = parseInt(event.target.value.replace(/\s/g, ''));

    if (isNaN(value)) {
      value = '';
      setSum(value);
      return;
    }

    value = Math.min(value, 30000000);

    setSum(value);
  };
  const monthSliderHandle = (event: ChangeEvent<HTMLInputElement>) => {
    /**
     * Получаю value, удаляю полученные пробелы, а потом приравниваю его к числу
     */
    let value: number | string = parseInt(event.target.value.replace(/\s/g, ''));

    if (isNaN(value)) {
      value = '';
      setMonth(value);
      return;
    }

    value = Math.min(value, 24);

    setMonth(value);
  };

  const handleChangeCurr = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrency(event.target.value as string);
    console.log(event.target.value);
  };

  const inputSumConfig: InputProps = {
    placeholder: '50 000 ₽',
    blurHandle: blurSumHandle,
    value: typeof sum === 'number' ? sum : '',
    sliderHandle: sumInputHandle,
    inputHandle: sumSliderHandle,
    label: 'Сумма вклада',
    min: 50000,
    max: 30000000,
    step: 1000,
    text: {
      from: 'от 50 000 ₽',
      to: 'до 30 000 000 ₽'
    }
  };
  const inputMonthConfig: InputProps = {
    placeholder: '3 месяца',
    blurHandle: blurMonthHandle,
    value: typeof month === 'number' ? month : '',
    sliderHandle: monthInputHandle,
    inputHandle: monthSliderHandle,
    label: 'На срок',
    min: 3,
    max: 24,
    step: 1,
    text: {
      from: 'от 3 мес.',
      to: 'до 24 мес.'
    }
  };

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
              <InputWithSlider { ...inputSumConfig }/>

              <InputWithSlider { ...inputMonthConfig }/>

              <div>
                <Select
                  style={ {
                    color: 'red'
                  } }
                  labelId='demo-customized-select-label'
                  id='demo-customized-select'
                  value={ currency }
                  displayEmpty
                  onChange={ handleChangeCurr }>
                  <MenuItem value='rub'>Рубли РФ</MenuItem>
                  <MenuItem value='usa'>Доллары США</MenuItem>
                  <MenuItem value='eur'>Евро</MenuItem>
                </Select>
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