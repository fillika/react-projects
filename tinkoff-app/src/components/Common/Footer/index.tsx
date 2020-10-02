import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div style={ { boxShadow: 'inset 0 1px 0 0 #e7e8ea' } }>
      <Container>
        <Grid style={ { marginTop: 0 } } container spacing={ 2 }>

          <Grid item md={ 9 }>
            <p>Тинькофф</p>

            <Grid container spacing={ 2 }>
              <Grid item>
                <Link to='/about/'>О банке</Link>
              </Grid>

              <Grid item>
                <Link to='/about/news/'>Новости</Link>
              </Grid>

              <Grid item>
                <Link to='/career/'>Работа</Link>
              </Grid>

              <Grid item>
                <Link to='/maps/payment/?partner=TINKOFF'>Работа</Link>
              </Grid>

              <Grid item>
                <Link to='/maps/atm/?partner=tcs'>Банкоматы</Link>
              </Grid>

              <Grid item>
                <Link to='/about/exchange/'>Курсы валют</Link>
              </Grid>

              <Grid item>
                <Link to='/contacts/'>Контакты</Link>
              </Grid>

              <Grid item>
                <a target='_blank' rel='noopener noreferrer' href='https://help.tinkoff.ru/'>Помощь</a>
              </Grid>

              <Grid item>
                <Link to='/secure/'>Безопасность</Link>
              </Grid>

              <Grid item>
                <a target='_blank' rel='noopener noreferrer' href='https://www.tinkoffgroup.com/'>For investors</a>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={ 3 }>
            <p><a href='tel:+78005558679'>8 800 555-86-79</a></p>
            <p>Для звонков по России</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
