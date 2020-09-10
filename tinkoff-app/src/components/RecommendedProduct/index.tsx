import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { Card } from './Card';
import { useStyles } from './style';

export const RecommendedProduct = () => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography variant='h2'>
          <p className={classes.subtitle}>Рекомендуемые продукты</p>
        </Typography>

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
