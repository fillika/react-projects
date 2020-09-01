import React, { FC, useState, MouseEvent } from 'react';
import { cells } from '../logic/index';

type strOrNum = string | number;
type TTableTD = {
  handleClick: (id: strOrNum) => void;
  id: strOrNum;
};

export const Table: FC = () => {
  const [combination, setCombination] = useState<strOrNum[]>([]);

  const handleClick = (id: strOrNum) => {
    setCombination(() => [...combination, id]);
  };

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

const TableTd: FC<TTableTD> = ({ handleClick, id }) => (
  <td onClick={() => handleClick(id)} className='cell' id={id.toString()} />
);
