import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";
import { SocialNetworks } from "../../SocialNetworks";
import { tinkoffLinksMenuLinks } from "../data";

export const FirstRow: React.FC = () => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const renderLinks = tinkoffLinksMenuLinks.map(data => {
    const { id, headLink, listLink } = data;

    const links = listLink.map(link => {
      const { to, name, isLink } = link;

      return (
        <Grid key={ to + name } className={ classes.linkWrapper } item>
          {
            !isLink
              ? <Link className={ classes.link } to={ to }>{ name }</Link>
              : <a className={ classes.link } target='_blank' rel='noopener noreferrer' href={ to }>{ name }</a>
          }
        </Grid>
      );
    });

    return (
      <div key={ id }>
        <p>
          <Link className={ classes.headLink } to={ headLink.to }>{ headLink.name }</Link>
        </p>

        <Grid container>
          { links }
        </Grid>

      </div>
    );
  });

  return (
    <div className={ classes.wrapper }>
      <Container>
        <div className={ classes.innerWrapper }>

          { matches && renderLinks }

          <div className={ classes.contacts }>
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