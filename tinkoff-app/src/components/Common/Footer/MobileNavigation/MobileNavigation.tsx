import React from "react";
import { useStyle } from "./style";
import { Container } from "@material-ui/core";

import { tinkoffLinksMenuLinks, navigationsLinks } from "../data";
import { MenuList } from "./MenuList";

export const MobileNavigation: React.FC = () => {
  const classes = useStyle();

  const renderTinkoffMenu = tinkoffLinksMenuLinks.map((data, idx) => <MenuList { ...data } key={ idx }/>);
  const renderListItems = navigationsLinks.map((data, idx) => <MenuList { ...data } key={ idx }/>);

  return (
    <div className={classes.wrapper}>
      <Container>
        <ul className={ classes.menu }>
          { renderTinkoffMenu }
          { renderListItems }
        </ul>
      </Container>
    </div>
  );
};
