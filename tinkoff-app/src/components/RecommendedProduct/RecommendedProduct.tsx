import React from "react";

import { Container, Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";

import { useStyles } from "./style";

import { Card } from "../Common/Card";
import { cardsData } from "./cardsData";

export const RecommendedProduct = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matches = useMediaQuery( `(max-width: ${ theme.breakpoints.values.lg - 1 }px)` );

  const createCards = cardsData.map( ( card, index ) => {
    const { id } = card;

    /**
     * Проверка для того, чтобы на мобильной версии было не более 4 карточек
     */
    if (matches && index > 3) {
      return null;
    }

    return (<Card { ...card } key={ id }/>);
  } );

  return (
    <div className={ classes.wrapper }>
      <Container>
        <Typography variant='h2'>Рекомендуемые продукты</Typography>

        <Grid
          spacing={ 6 } container>
          { createCards }
        </Grid>
      </Container>
    </div>
  );
};