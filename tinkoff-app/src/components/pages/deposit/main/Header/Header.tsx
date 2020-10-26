import React, { FC } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { useStyles } from "./style";

export const Header: FC = () => {
  const { wrapper, mainTitle } = useStyles();

  return (
    <section className={ wrapper }>
      <Container>
        <Typography className={ mainTitle } variant='h1'>Откройте вклад</Typography>
        <p>Доходность по вкладу до 4.69% в рублях.</p>
        <p>Вклады по выгодной ставке: с пополнением, частичным изъятием и ежемесячной капитализацией на карту или вклад.</p>
        <p>
          <Button variant='contained' color='primary'>Открыть вклад</Button>
        </p>
      </Container>
    </section>
  );
};