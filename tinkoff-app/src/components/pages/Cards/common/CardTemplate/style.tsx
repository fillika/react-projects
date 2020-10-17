import { createStyles, makeStyles } from '@material-ui/core';

const buttonsCommonsStyles = {
  padding: '0 8px',
  minHeight: '30px',
  fontSize: '13px',
};

export const useStyles = makeStyles(({ spacing, breakpoints, transitions, palette }) =>
  createStyles({
    wrapper: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      [breakpoints.up('lg')]: {
        flexDirection: 'row',
      }
    },
    grayBg: {
      background: 'linear-gradient(248deg, #54595f, #71787e)',
      color: '#fff',
      '& h1, h2, h3, h4, h5, h6': {
        color: '#fff'
      },

      [breakpoints.up('lg')]: {
        background: 'linear-gradient(90deg, #4d5869, #707c92)',
      }
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
      paddingTop: 48,
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
      fontSize: 17,
      lineHeight: 1.45,
      marginBottom: 8,

      [breakpoints.up('lg')]: {
        fontSize: 24,
        paddingBottom: spacing(),
      }
    },
    about: {
      fontSize: 15,
      paddingBottom: 8,
      [breakpoints.up('lg')]: {
        opacity: 0.6
      }
    },
    h6: {
      fontSize: 15,
    },
    smallSubtitle: {
      fontSize: 15,
      color: '#fff',
      opacity: 0.6
    },
    description: {
      backgroundColor: 'hsla(0,0%,100%,.64)',
      fontSize: 13,
      paddingLeft: spacing(),
      paddingRight: spacing(),
      color: '#333',
      lineHeight: '20px',
      height: spacing(3),
      marginLeft: spacing(3),
      marginBottom: spacing(3),
      display: 'inline-block',
      [breakpoints.up('lg')]: {
        marginLeft: spacing(4),
      }
    },
    learnMoreButton: {
      fontWeight: 400,

      [breakpoints.down(1154)]: {
        ...buttonsCommonsStyles,
        backgroundColor: 'rgba(51, 51, 51, 0.36)',
      }
    },
    formToCard: {
      fontWeight: 400,
      marginRight: '8px',

      [breakpoints.down(1154)]: {
        ...buttonsCommonsStyles,
        boxShadow: 'none'
      }
    },
    mobileList: {
      paddingLeft: 4,
      marginLeft: 6,

      '& li': {
        fontSize: 15,
        position: 'relative',
        lineHeight: 1.5,

        '&:before': {
          content: '""',
          position: 'absolute',
          width: 4,
          height: 4,
          borderRadius: '50%',
          display: 'block',
          backgroundColor: palette.primary.main,
          left: -10,
          top: 8
        }
      }
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
