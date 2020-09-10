import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Grid, Button, useTheme } from '@material-ui/core';

import { useStyles } from './style';

export const Card: React.FC = () => {
  const theme = useTheme();
  const useMedia = `(max-width: ${theme.breakpoints.values.lg - 1}px)`;
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={4}>
      <Grid className={classes.wrapper} container direction='column'>
        <Grid className={classes.imageWrapper} item>
          <picture>
            <source
              media={useMedia}
              srcSet='https://acdn.tinkoff.ru/static/pages/files/eebfed43-7bbb-4b98-9741-1641c08b72bd.webp 1x, https://acdn.tinkoff.ru/static/pages/files/9ab6a652-c12c-4ad3-93d6-0a678dd35704.webp 2x'
              type='image/webp'
            />

            <source
              media={useMedia}
              srcSet='https://acdn.tinkoff.ru/static/pages/files/3e57b64d-9b4a-4032-8555-9bd11d308b75.png 1x, https://acdn.tinkoff.ru/static/pages/files/1bdde9e3-8f16-4387-8611-51459fce0948.png 2x'
            />

            <source
              srcSet='https://acdn.tinkoff.ru/static/pages/files/c83d87e6-a779-4e2d-9217-fc2bf84f5913.webp 1x, https://acdn.tinkoff.ru/static/pages/files/c2363516-06b4-4c49-a7f5-0f8bccc089ef.webp 2x'
              type='image/webp'
            />

            <img
              className={classes.image}
              loading='lazy'
              src='https://acdn.tinkoff.ru/static/pages/files/e851d301-8b14-4602-81ee-1a99abb79e99.png'
              srcSet='https://acdn.tinkoff.ru/static/pages/files/e775a71d-7b3b-4192-a6e9-9419ce963924.png 2x'
              alt='Кредит наличными Тинькофф'
            />
          </picture>
        </Grid>

        <Grid item>
          <Typography variant='h4'>Дебетовая карта Tinkoff Black</Typography>
        </Grid>

        <Grid item>
          <Typography>Кэшбэк до 30% и ежемесячный процент на остаток</Typography>
        </Grid>

        <Grid item>
          <Button>
            <Link to='/cards/debit-cards/tinkoff-black/'>Оформить карту</Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
