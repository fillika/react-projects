import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => createStyles({
  headLink: {
    color: 'rgba(0,0,0,.6)',
    fontWeight: 500,
    fontSize: 11,
    textTransform: 'uppercase',
    lineHeight: 1.4545
  },
  list: {
    paddingTop: theme.spacing(1) + 2
  },
  listItem: {
    marginBottom: theme.spacing(1),
    lineHeight: 0
  },
  listLink: {
    color: 'rgba(0,0,0,.4)',
    fontSize: 13,
    lineHeight: 1.5384,
    transition: 'color .15s ease-in-out',

    '&:hover': {
      color: 'rgba(0,0,0,.8)'
    }
  },
}));