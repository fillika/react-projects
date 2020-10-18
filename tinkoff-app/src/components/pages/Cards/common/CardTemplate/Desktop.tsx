import React from "react";
import { IDesktop } from "./types";
import { useStyles } from "./style";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Desktop: React.FC<IDesktop> = ({ isMain, title, about, img, list, formButton, learnMoreButton }) => {
  const {
    h6, smallSubtitleMain, smallSubtitleSecond, imageWrapper,
    textWrapper, textInnerWrapper, titlesWrapper, formToCardButton,
    learnMoreButtonMain, learnMoreButtonSecond,
    title: titleCls,
    about: aboutCls
  } = useStyles();

  const renderedList = list.map(({ itemTitle, itemSubtitle }, idx) => (
    <div key={ itemTitle + idx } style={ { width: '33.33%' } }>
      <h6 className={ h6 } dangerouslySetInnerHTML={ { __html: itemTitle } }/>
      <p
        className={ isMain ? smallSubtitleMain : smallSubtitleSecond }
        dangerouslySetInnerHTML={ { __html: itemSubtitle } }/>
    </div>
  ));

  return (
    <>
      <div className={ imageWrapper }>
        <picture>
          <source srcSet={ img.min1360webp } type='image/webp' media='(min-width: 1360px)'/>
          <source srcSet={ img.min1360 } media='(min-width: 1360px)'/>
          <source srcSet={ img.max1360webp } type='image/webp' media='(max-width: 1360px)'/>
          <img loading='lazy' src={ img.src } srcSet={ img.srcSet } alt={ img.alt }/>
        </picture>
      </div>

      <div className={ textWrapper }>
        <div className={ textInnerWrapper }>
          <div className={ titlesWrapper }>
            <Typography className={ titleCls } variant='h1' dangerouslySetInnerHTML={ { __html: title } }/>

            <Typography className={ aboutCls } dangerouslySetInnerHTML={ { __html: about } }/>
          </div>

          <div style={ { display: 'flex' } }>
            { renderedList }
          </div>

          <div style={ { marginTop: 'auto', paddingTop: '24px' } }>
            <Button className={ formToCardButton } variant='contained' color='primary'>
              <Link to={ formButton.href }>{ formButton.text }</Link>
            </Button>

            <Button className={ isMain ? learnMoreButtonMain : learnMoreButtonSecond } variant='text'>
              <Link to={ learnMoreButton.href }>{ learnMoreButton.text }</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
