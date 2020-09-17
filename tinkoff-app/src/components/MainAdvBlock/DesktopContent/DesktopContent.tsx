import React from 'react';
import { Link } from 'react-router-dom';

import { TComponentData } from '../types';

import { AdvImage } from '../AdvImage';

import { Typography, Button, Container } from '@material-ui/core';
import { useStyles } from './styles';

export const DesktopContent: React.FC<TComponentData> = props => {
  const classes = useStyles();
  const { title, subTitle, button, image } = props;

  return (
    <Container>
      <div className={ classes.wrapper }>
        <div className={ classes.imageWrapper }>
          <div>
            <AdvImage { ...image } />
          </div>
        </div>

        <div className={ classes.textWrapper }>
          <div style={ { flexGrow: 1 } }>
            <Typography className={ classes.h1 } variant='h1'>{ title }</Typography>
            <Typography className={ classes.subTitle }>{ subTitle }</Typography>
          </div>

          <div>
            <Link to={ button.link }>
              <Button className={ classes.button } variant='contained' color='primary'>
                { button.text }
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
