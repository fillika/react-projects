import { ChangeEvent, FormEvent } from "react";

export type InputProps = {
  label: string;
  placeholder: string;
  min: number;
  max: number;
  step: number;
  value: number | string;
  inputHandle: (event: ChangeEvent<HTMLInputElement>) => void;
  blurHandle: (value: number | string, min: number) => void;
  sliderHandle: (event: FormEvent<any>, newValue: number | number[]) => void;
  text: {
    from: string,
    to: string,
  }
}