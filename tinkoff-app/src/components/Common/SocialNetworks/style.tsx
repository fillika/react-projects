import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles(({ palette }) => createStyles({
  wrapper: {
    display: 'flex'
  },
  link: {
    color: 'rgba(0,0,0, 0.4)',
    transition: 'color .15s ease-in-out',
    cursor: 'pointer',
    width: 36,
    height: 36,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.grey[500],
    marginLeft: 7,
    marginRight: 7,

    '&:visited': {
      color: 'rgba(0,0,0, 0.4)',
    },

    '&:hover': {
      color: 'rgba(0,0,0, 0.8)',
    },

    '&:first-child': {
      marginLeft: 0
    },

    '&:last-child': {
      marginRight: 0
    },
  }
}));