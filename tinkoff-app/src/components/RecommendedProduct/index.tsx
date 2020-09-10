import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Card } from './Card';

export const RecommendedProduct = () => {
  return (
    <div>
      <Container>
        <h2>Рекомендуемые продукты</h2>

        <Grid spacing={6} container>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
    </div>
  );
};
