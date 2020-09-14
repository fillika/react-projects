import { createStyles, makeStyles } from '@material-ui/core';

export const useCommonStyles = makeStyles(theme => createStyles({
  blueButton: {
    color: '#1771e6',
    padding: '9px 23px 7px',
    zIndex: 10100,
    [theme.breakpoints.up('lg')]: {
      border: '1px solid #ecf1f7',
      backgroundColor: '#ecf1f7',

      '&:hover': {
        borderColor: '#e4ebf3',
        backgroundColor: '#e4ebf3',
      },
    },
  },
  textButton: {
    color: '#1771e6',
    paddingLeft: 0,
    fontWeight: 400,
    '&:visited': {
      color: '#1771e6',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      opacity: 0.95,
    },
  },
}));
