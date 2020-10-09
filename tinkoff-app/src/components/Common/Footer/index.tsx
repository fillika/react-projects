import React from "react";

import { FirstRow } from "./FirstRow";
import { FooterNavigation } from "./FooterNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { useMediaQuery, useTheme } from "@material-ui/core";

export const Footer: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <FirstRow/>
      { matches && <MobileNavigation/> }
      <FooterNavigation/>
    </>
  );
};
