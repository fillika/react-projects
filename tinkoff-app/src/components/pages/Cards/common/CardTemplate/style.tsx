import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, breakpoints, transitions }) =>
  createStyles({
    wrapper: {
      display: 'flex',

    },
    grayBg: {
      background: 'linear-gradient(90deg, #4d5869, #707c92)',
      color: '#fff',
      '& h1, h2, h3, h4, h5, h6': {
        color: '#fff'
      },
      '& p': {
        color: '#fff',
        opacity: 0.6
      },
    },
    darkBg: {
      background: 'linear-gradient(90deg, #6D6D6D, #373737)',
      color: '#fff'
    },
    wrapperHover: {
      transition: 'transform .3s, box-shadow .3s',
      transitionTimingFunction: 'ease',
      '&:hover': {
        boxShadow: '0 12px 36px 0 rgba(0,0,0,.2)',
        transform: 'translateY(-4px)'
      }
    },
    imageWrapper: {
      lineHeight: 0,
      minHeight: 252,
      [breakpoints.up(1360)]: {
        minHeight: 296
      }
    },
    textWrapper: {
      width: '100%',
      padding: spacing(4),
      flexGrow: 1
    },
    textInnerWrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: 512,
      [breakpoints.up(1360)]: {
        width: 660
      }
    },
    titlesWrapper: {
      paddingBottom: spacing(2),
    },
    title: {
      fontSize: 24,
      paddingBottom: spacing()
    },
    about: {
      fontSize: 15
    },
    smallSubtitle: {
      fontSize: 13
    },
    description: {
      backgroundColor: 'hsla(0,0%,100%,.64)',
      fontSize: 13,
      paddingLeft: spacing(),
      paddingRight: spacing(),
      color: '#333',
      lineHeight: '20px',
      height: spacing(3),
      marginLeft: spacing(4),
      marginBottom: spacing(3),
      display: 'inline-block'
    },
    showCard: {
      opacity: 0,
      animation: `200ms $showCard 350ms linear forwards`,
    },
    "@keyframes showCard": {
      "0%": {
        opacity: 0,
        transform: "translateY(35%)"
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)"
      }
    },
  })
);
