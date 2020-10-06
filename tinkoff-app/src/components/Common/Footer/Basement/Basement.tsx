import React from "react";
import { useStyle } from "./style";
import { SocialNetworks } from "../../SocialNetworks";

export const Basement: React.FC = () => {
  const classes = useStyle();

  return (
    <div className={ classes.wrapper }>
      <p>&copy;&nbsp;2006&nbsp;&mdash; { new Date().getFullYear() }, АО&nbsp;&laquo;Тинькофф Банк&raquo;, официальный сайт, лицензия ЦБ&nbsp;РФ &#8470;&nbsp;2673</p>
      <SocialNetworks/>
    </div>
  );
};