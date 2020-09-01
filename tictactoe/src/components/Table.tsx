import React, { FC, useState } from 'react';
import { cells } from '../logic/index';

type strOrNum = string | number;
type TTableTD = {
  handleClick: (id: strOrNum) => void;
  id: strOrNum;
};

export const Table: FC = () => {
  const [combination, setCombination] = useState<strOrNum[]>([]);

  function handleClick(id: strOrNum) {
    /**
     * Здесь Я делаю проверку на наличие id в массиве.
     * Если он уже есть, то Я не выполняю setCombination
     */
    if (combination.indexOf(id) === -1) {
      setCombination(() => [...combination, id]);
    }
  }

  const createTable = cells.map((cellArr, index) => (
    <tr key={index}>
      {cellArr.map(({ id }) => (
        <TableTd key={id} handleClick={handleClick} id={id} />
      ))}
    </tr>
  ));

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
