import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ spacing, breakpoints, transitions, palette }) =>
  createStyles({
    hideTitle: {
      overflow: 'hidden',
      animation: `$hideTitle 350ms linear forwards`,
    },
    description: {
      overflow: 'hidden',
      maxHeight: '0',
    },
    showDescription: {
      opacity: 0,
      animation: `$showDescription 550ms linear forwards`,
    },
    button: {
      color: '#1771e6',
      fontSize: 13,
      cursor: 'pointer',
      transition: '260ms ease',
      '&:hover': {
        opacity: 0.75
      }
    },
    "@keyframes showDescription": {
      "0%": {
        opacity: 0,
        transform: "translateY(35%)"
      },
      "50%": {
        opacity: 0,
        maxHeight: '20em'
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
        maxHeight: '20em'
      }
    },
    '@keyframes hideTitle': {
      '0%': {
        opacity: 1,
        maxHeight: '5em'
      },
      '75%': {
        opacity: 0,
        maxHeight: '5em'
      },
      '85%': {
        maxHeight: '5em'
      },
      '100%': {
        maxHeight: 0,
        opacity: 0
      },
    }
  }));
