import React from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./style";
import { Grid } from "@material-ui/core";
import { TNavigation } from "../../types";
import { NavigationsLinks } from "../../data";


export const DesktopNavigation: React.FC = () => {
  const renderColumn = NavigationsLinks.map(data => {
    const { id, listLink, headLink } = data;

    return <Column key={ id } id={ id } listLink={ listLink } headLink={ headLink }/>;
  });

  return (
    <div>
      <Grid justify='space-between' container>{ renderColumn }</Grid>

    </div>
  );
};

const Column: React.FC<TNavigation> = props => {
  const classes = useStyle();
  const { id, headLink, listLink } = props;

  const renderList = listLink.map(objectData => {
    const { to, name, isLink } = objectData;

    return (
      <li key={ id + name } className={ classes.listItem }>
        {
          isLink
            ? <a className={ classes.listLink } rel='noopener noreferrer' target='_blank' href={ to }>{ name }</a>
            : <Link className={ classes.listLink } to={ to }>{ name }</Link>
        }
      </li>);
  });

  return (
    <Grid item>
      <p>
        <Link className={ classes.headLink } to={ headLink.to }>{ headLink.name }</Link>
      </p>

      <ul className={ classes.list }>{ renderList }</ul>
    </Grid>
  );
};