import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ spacing, breakpoints, transitions, palette }) =>
  createStyles({
    wrapper: {
      backgroundColor: '#72797f',
      color: '#fff',
      height: 498,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundImage: 'url(https://static2.tinkoff.ru/portal/products/backgrounds/deposit/mobile.jpg)',
      backgroundSize: 'auto 100%',

      [breakpoints.up('sm')]: {
        backgroundImage: 'url(https://static2.tinkoff.ru/portal/products/backgrounds/deposit/tablet.jpg)',
      },
      [breakpoints.up('lg')]: {
        backgroundImage: 'url(https://static2.tinkoff.ru/portal/products/backgrounds/deposit/desktop.jpg)',
        height: 390,

      }
    },
    mainTitle: {
      color: '#fff'
    }
  }));
