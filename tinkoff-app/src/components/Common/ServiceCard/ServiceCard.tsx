import React from 'react';
import { Typography, ButtonBase } from '@material-ui/core';

import { useStyles } from './style';
import { Link } from 'react-router-dom';
import { TServiceCardProps } from './types';

export const ServiceCard: React.FC<TServiceCardProps> = props => {
  const classes = useStyles();
  const { link, pseudoLink, smallText, src, title } = props;

  return (
    <ButtonBase disableRipple className={classes.wrapper}>
      <Link className={classes.linkWrapper} to={link} />
      <div className={classes.contentWrapper}>
        <Typography variant='h4'>
          <p className={classes.title}>{title}</p>
        </Typography>

        <img className={classes.imageIcon} src={src} alt={title} />

        <p className={classes.smallText}>{smallText}</p>

        <p className={classes.pseudoLink}>{pseudoLink}</p>
      </div>
    </ButtonBase>
  );
};
