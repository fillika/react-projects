import React from "react";
import { IMobile } from "./types";
import { useStyles } from "./style";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Mobile: React.FC<IMobile> = ({ isMain, img, about, title, list, formButton, learnMoreButton }) => {
  const classes = useStyles();

  const renderedList = list.map((string, idx) => (
    <li key={ idx + string } dangerouslySetInnerHTML={ { __html: string } }/>));

  return (
    <>
      <div style={ { padding: '40px 24px 24px' } }>
        <Typography className={ classes.title } variant='h1' dangerouslySetInnerHTML={ { __html: title } }/>
        <Typography className={ classes.about } dangerouslySetInnerHTML={ { __html: about } }/>

        <ul className={ classes.mobileList }>
          { renderedList }
        </ul>

        <div style={ { marginTop: 'auto', paddingTop: '24px' } }>
          <Button className={ classes.formToCardButton } variant='contained' color='primary'>
            <Link to={ formButton.href }>{ formButton.text }</Link>
          </Button>

          <Button
            className={ isMain ? classes.learnMoreButtonMain : classes.learnMoreButtonSecond } variant='text'>
            <Link to={ learnMoreButton.href }>{ learnMoreButton.text }</Link>
          </Button>
        </div>
      </div>

      <div style={ { paddingLeft: '24px', lineHeight: 0, paddingRight: '24px' } }>
        <picture>
          <source srcSet={ img.webp } type='image/webp'/>
          <img loading='lazy' src={ img.src } srcSet={ img.srcSet } alt={ img.alt }/>
        </picture>
      </div>
    </>
  );
};
