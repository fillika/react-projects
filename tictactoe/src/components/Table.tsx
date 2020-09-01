import React, { FC, useState, useEffect } from 'react';
import { cells } from '../logic/index';

type strOrNum = string | number;
type TTableTD = {
  handleClick: (id: strOrNum) => void;
  id: strOrNum;
};

export const Table: FC = () => {
  const [combinationPerson, setCombinationPerson] = useState<strOrNum[]>([]);
  const [combinationII, setCombinationII] = useState<strOrNum[]>([]);

  function handleClick(id: strOrNum) {
    /**
     * Здесь Я делаю проверку на наличие id в массиве.
     * Если он уже есть, то Я не выполняю setCombination
     */
    if (combinationPerson.indexOf(id) === -1) {
      setCombinationPerson(() => [...combinationPerson, id]);
    }
  }

  const createTable = cells.map((cellArr, index) => (
    <tr key={index}>
      {cellArr.map(({ id }) => (
        <TableTd key={id} handleClick={handleClick} id={id} />
      ))}
    </tr>
  ));

  useEffect(() => {
    /**
     * Проверка защищает нас от хода ИИ при первичном рендере
     */
    if (combinationPerson.length !== 0) {
      let numbersId = [0, 1, 2, 3, 4, 5, 6, 7, 8];

      const id = combinationPerson.forEach(num => {
        const x = numbersId.filter(n => n !== num);
        numbersId = x;

        console.log(numbersId);

        return numbersId;
      });

      console.log(id);

      setCombinationII([...combinationII, 2]);
    }
  }, [combinationPerson]);

  return (
    <table className='ttt-table'>
      <tbody>{createTable}</tbody>
    </table>
  );
};

const TableTd: FC<TTableTD> = ({ handleClick, id }) => {
  const [isClickedPerson, setClickedPerson] = useState(false);

  /**
   * Функция использует замыкание. Запускает изменение локального state
   * А так же функцию handleClick из props
   */
  function click() {
    setClickedPerson(true);
    handleClick(id);
  }

  return <td onClick={click} className={isClickedPerson ? 'cell cell--clicked' : 'cell'} id={id.toString()} />;
};
