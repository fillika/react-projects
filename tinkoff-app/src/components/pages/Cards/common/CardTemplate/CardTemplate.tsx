import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { useStyles } from "./style";
import clsx from "clsx";
import { IData } from "./types";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export const CardTemplate: React.FC<IData> = props => {
  const { isMain, desktop, mobile } = props;
  const classes = useStyles();
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('lg'));

  const wrapperClasses = isMain
    ? clsx(classes.wrapper, classes.mainGrayBg, classes.wrapperHover)
    : clsx(classes.wrapper, classes.secondGrayBg);

  const descriptionClasses = isMain
    ? clsx(classes.description, classes.descriptionMain)
    : clsx(classes.description, classes.descriptionSecond);

  return (
    <div style={ { padding: '16px 0' } }>
      <div className={ wrapperClasses }>
        <span style={ { position: 'absolute', top: 0, lineHeight: 0, } }>
          <span className={ descriptionClasses }>Наша лучшая кредитная карта</span>
        </span>

        {
          matches
            ? <Desktop { ...desktop } isMain={ isMain }/>
            : <Mobile { ...mobile } isMain={ isMain }/>
        }
      </div>
    </div>
  );
};


