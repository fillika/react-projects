import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";
import { SocialNetworks } from "../../SocialNetworks";

export const FirstRow: React.FC = () => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const desktopMenu = (
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
  );

  return (
    <div className={ classes.wrapper }>
      <Container>
        <div className={ classes.innerWrapper }>

          <div>
            {
              matches &&
              <p>
                <Link className={ classes.headLink } to='/about/'>Тинькофф</Link>
              </p>
            }

            {
              matches && desktopMenu
            }
          </div>

          <div className={classes.contacts}>
            <p className={ classes.phone }><a href='tel:+78005558679'>8 800 555-86-79</a></p>
            <p className={ classes.signature }>Для звонков по России</p>

            {
              !matches && <SocialNetworks/>
            }
          </div>
        </div>
      </Container>
    </div>
  );
};