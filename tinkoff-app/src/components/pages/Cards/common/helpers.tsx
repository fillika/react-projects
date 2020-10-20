import { IData } from "./CardTemplate/types";
import { CardTemplate } from "./CardTemplate";
import React from "react";

/**
 * Функция принимает массив данных, который потом будем рендерить
 * в зависимости от переменной
 * @param data
 */
export default function renderOtherCards(data: IData[]) {
  return data.map((obj, idx) => {
    return <CardTemplate key={ idx + idx++ } { ...obj }/>;
  });
}