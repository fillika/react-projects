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
      textAlign: 'center',
      fontSize: 17,
      lineHeight: '24px',

      [breakpoints.up('sm')]: {
        backgroundImage: 'url(https://static2.tinkoff.ru/portal/products/backgrounds/deposit/tablet.jpg)',
        height: 372,
        textAlign: 'left',
      },
      [breakpoints.up('lg')]: {
        backgroundImage: 'url(https://static2.tinkoff.ru/portal/products/backgrounds/deposit/desktop.jpg)',
        height: 390,
      }
    },
    container: {
      height: '100%',
      paddingTop: spacing(3),
      paddingBottom: spacing(8),
    },
    textContent: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 392,
      [breakpoints.up('sm')]: {
        paddingLeft: spacing(6)
      },
      [breakpoints.up('lg')]: {
        paddingLeft: 0
      }
    },
    buttonWrapper: {
      marginTop: 'auto'
    },
    mainTitle: {
      color: '#fff',
      fontSize: 24,
      lineHeight: '1.1666em',
      fontWeight: 200,
      paddingBottom: spacing() + 4,
      [breakpoints.up('lg')]: {
        fontSize: 50,
      }
    },
    button: {
      padding: '21px 40px 22px',
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 400
    }
  }));
