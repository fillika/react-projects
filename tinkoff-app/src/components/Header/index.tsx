import React from 'react';

import { FirstLevelHeader } from './FirstLevelHeader';
import { SecondLevelHeader } from './SecondLevelHeader';
import { ThirdLevelHeader } from './ThirdLevelHeader';
import { useTheme, useMediaQuery } from '@material-ui/core';

export const Header: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <header>
      {/* Меню 1 уровня */}
      <FirstLevelHeader />

      {/* Меню 2 уровня */}
      {matches && <SecondLevelHeader />}

      {/* Меню 3 уровня */}
      <ThirdLevelHeader />
    </header>
  );
};
