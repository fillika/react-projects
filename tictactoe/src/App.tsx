import React, { FC } from 'react';
import './App.scss';
import { Table } from './components/Table';

const App: FC = () => {
  return (
    <div className='app'>
      <header>
        <h1>Крестики-нолики</h1>
      </header>

      <Table />

      <div>
        <button>Играть заново</button>
      </div>
    </div>
  );
};

export default App;
