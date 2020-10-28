import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { InputAdornment, Slider, TextField } from "@material-ui/core";
import { useStyles } from "./style";

export const InputSum: FC = () => {
  const { input, slider, inputWrapper } = useStyles();
  const [sum, setSum] = useState<number | number[]>(50000);

  const sliderHandle = (event: FormEvent<any>, newValue: number | number[]) => {
    setSum(newValue);
  };

  const inputHandle = (event: ChangeEvent<HTMLInputElement>) => {
    /**
     * Получаю value, удаляю полученные пробелы, а потом приравниваю его к числу
     */
    let value = parseInt(event.target.value.replace(/\s/g, ''));

    if (isNaN(value)) {
      value = 0;
    }

    value = Math.max(0, Math.min(value, 30000000));

    setSum(value);
  };

  return (
    <div>
      <div className={ inputWrapper }>
        <TextField
          fullWidth={ true } onChange={ inputHandle } className={ input } placeholder='50 000 ₽' label='Сумма вклада'
          variant='filled' value={ typeof sum === 'number' ? sum.toLocaleString() : '' } id='sum' InputProps={ {
          endAdornment: <InputAdornment position='end'>₽</InputAdornment>,
        } }/>
        <Slider
          className={ slider } value={ sum } min={ 50000 } max={ 30000000 } step={ 1000 } onChange={ sliderHandle }/>
      </div>

      <span>От 50 000 ₽ до 30 000 000 ₽</span>

    </div>
  );
};