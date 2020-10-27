import React, { FC } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { useStyles } from "./style";

export const Header: FC = () => {
  const { wrapper, mainTitle, container, buttonWrapper, button, textContent } = useStyles();

  return (
    <div className={ wrapper }>
      <Container className={ container }>
        <div className={ textContent }>
          <Typography className={ mainTitle } variant='h1'>Откройте вклад</Typography>
          <p>Доходность по вкладу до 4.69% в рублях.</p>
          <p>Вклады по выгодной ставке: с пополнением, частичным изъятием и ежемесячной капитализацией на карту или вклад.</p>
          <p className={ buttonWrapper }>
            <Button className={ button } variant='contained' color='primary'>Открыть вклад</Button>
          </p>
        </div>
      </Container>
    </div>
  );
};