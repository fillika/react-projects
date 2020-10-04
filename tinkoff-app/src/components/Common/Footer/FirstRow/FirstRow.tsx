import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";

export const FirstRow: React.FC = () => {
  const classes = useStyle();

  return (
    <div className={ classes.wrapper }>
      <Container>
        <div className={ classes.innerWrapper }>

          <div>
            <p>
              <Link className={classes.headLink} to='/about/'>Тинькофф</Link>
            </p>

            <Grid container>
              <Grid className={ classes.linkWrapper } item>
                <Link className={ classes.link } to='/about/'>О банке</Link>
              </Grid>

              <Grid className={ classes.linkWrapper } item>
                <Link className={ classes.link } to='/about/news/'>Новости</Link>
              </Grid>

              <Grid className={ classes.linkWrapper } item>
                <Link className={ classes.link } to='/career/'>Работа</Link>
              </Grid>

              <Grid className={ classes.linkWrapper } item>
                <Link className={ classes.link } to='/maps/payment/?partner=TINKOFF'>Точки пополнения</Link>
              </Grid>

              <Grid className={ classes.linkWrapper } item>
                <Link className={ classes.link } to='/maps/atm/?partner=tcs'>Банкоматы</Link>
              </Grid>

              <Grid className={ classes.linkWrapper } item>
                <Link className={ classes.link } to='/about/exchange/'>Курсы валют</Link>
              </Grid>

              <Grid className={ classes.linkWrapper } item>
                <Link className={ classes.link } to='/contacts/'>Контакты</Link>
              </Grid>

              <Grid className={ classes.linkWrapper } item>
                <a
                  className={ classes.link } target='_blank' rel='noopener noreferrer'
                  href='https://help.tinkoff.ru/'>Помощь</a>
              </Grid>

              <Grid className={ classes.linkWrapper } item>
                <Link className={ classes.link } to='/secure/'>Безопасность</Link>
              </Grid>

              <Grid className={ classes.linkWrapper } item>
                <a
                  className={ classes.link } target='_blank' rel='noopener noreferrer'
                  href='https://www.tinkoffgroup.com/'>For investors</a>
              </Grid>
            </Grid>
          </div>

          <div>
            <p className={ classes.phone }><a href='tel:+78005558679'>8 800 555-86-79</a></p>
            <p className={ classes.signature }>Для звонков по России</p>
          </div>
        </div>
      </Container>
    </div>
  )
}