import React, { FC } from "react";
import { Slider, TextField } from "@material-ui/core";
import { useStyles } from "./style";
import { InputProps } from "./types";

export const InputWithSlider: FC<InputProps> = props => {
  const { input, slider, inputWrapper, underText } = useStyles();
  const { text, min, max, step, label, inputHandle, sliderHandle, value, blurHandle, placeholder } = props;

  const formatter = new Intl.NumberFormat("ru", {
    minimumFractionDigits: 0
  });

  const checkedSliderValue = typeof value === 'number' ? value : min;

  const checkedInputValue: number | string = typeof value === 'number'
    ? formatter.format(value)
    : '';

  return (
    <div>
      <div className={ inputWrapper }>
        <TextField
          onBlur={ () => blurHandle(value, min) }
          fullWidth={ true }
          onChange={ inputHandle }
          className={ input }
          placeholder={ placeholder }
          label={ label }
          variant='filled'
          value={ checkedInputValue }
          id='sum'/>

        <Slider
          className={ slider }
          value={ checkedSliderValue }
          min={ min }
          max={ max }
          step={ step }
          onChange={ sliderHandle }/>
      </div>

      <div className={ underText }><span>{ text.from }</span><span>{ text.to }</span></div>
    </div>
  );
};