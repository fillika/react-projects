import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(theme => createStyles({
  link: {
    color: 'rgba(0,0,0, 0.4)',
    transition: 'color .15s ease-in-out',
    cursor: 'pointer',

    '&:visited': {
      color: 'rgba(0,0,0, 0.4)',
    },

    '&:hover': {
      color: 'rgba(0,0,0, 0.8)',
    }
  }
}));