import React from "react";

import { Button, Container, Grid } from "@material-ui/core";
import { useCommonStyles } from "../../../commonStyles";

import { Card } from "../../Common/Card";
import { cardsData } from "../cardsData";

export const DesktopContent: React.FC = () => {
  const commonClasses = useCommonStyles();

  const renderCards = cardsData.map( data => (
    <Card { ...data } key={ data.id }>
      <Button href={ data.link } className={ commonClasses.blueButton }>
        <span style={ { color: '#1771e6' } }>{ data.buttonText }</span>
      </Button>
    </Card>) );

  return (
    <Container>
      <Grid spacing={ 6 } container>
        { renderCards }
      </Grid>
    </Container>
  )
}