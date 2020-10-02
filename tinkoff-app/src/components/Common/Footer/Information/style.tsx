import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => createStyles({
  wrapper: {
    paddingTop: theme.spacing(2) + 4,
    paddingBottom: theme.spacing(1) + 2
  },
  title: {
    color: 'rgba(0,0,0,.6)',
    fontWeight: 500,
    fontSize: 11,
    textTransform: 'uppercase',
    lineHeight: 1.4545,
    marginBottom: theme.spacing(2)
  },
  link: {
    display: 'inline-block',
    color: 'rgba(0,0,0,.4)',
    fontSize: 13,
    lineHeight: 1.5384,
    transition: 'color .15s ease-in-out',
    marginRight: theme.spacing(3),

    '&:hover': {
      color: 'rgba(0,0,0,.8)'
    }
  },
}));