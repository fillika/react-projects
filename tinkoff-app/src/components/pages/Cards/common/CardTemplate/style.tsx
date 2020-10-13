import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    wrapper: {
      display: 'flex'
    },
    mainProduct: {
      background: 'linear-gradient(90deg, #4d5869, #707c92)',
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
      lineHeight: 0
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
    }
  })
);
