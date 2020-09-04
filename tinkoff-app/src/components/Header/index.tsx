import React from 'react';

import { Container } from '@material-ui/core';
import { FirstLevelHeader } from './FirstLevelHeader';
import { SecondLevelHeader } from './SecondLevelHeader';
import { ThirdLevelHeader } from './ThirdLevelHeader';

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        {/* Меню 1 уровня */}
        <FirstLevelHeader />

        {/* Меню 2 уровня */}
        <SecondLevelHeader />

        {/* Меню 3 уровня */}
        <ThirdLevelHeader />
      </Container>
    </header>
  );
};
