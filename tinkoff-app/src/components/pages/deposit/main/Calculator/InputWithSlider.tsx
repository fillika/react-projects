import React, { FC } from "react";
import { Slider, TextField } from "@material-ui/core";
import { useStyles } from "./style";
import { InputProps } from "./types";

export const InputWithSlider: FC<InputProps> = props => {
  const { input, slider, inputWrapper, underText } = useStyles();
  const { text, min, max, step, label, inputHandle, sliderHandle, value, blurHandle, placeholder } = props;

  const checkedSliderValue = typeof value === 'number' ? value : min;

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
          value={ typeof value === 'number' ? value.toLocaleString() : '' }
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