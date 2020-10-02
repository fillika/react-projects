import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => createStyles({
  wrapper: {
    boxShadow: 'inset 0 1px 0 0 #e7e8ea',
    paddingTop: theme.spacing(2) - 3,
    paddingBottom: theme.spacing(1) + 4,
  },
  innerWrapper: {
    marginTop: 0,
    display: 'flex',
    justifyContent: 'space-between'
  },
  link: {
    color: '#1771e6',
    fontSize: 13,
    '&:hover': {
      opacity: 0.95,
    },
    '&:visited': {
      color: '#1771e6',
    }
  },
  linkWrapper: {
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: theme.spacing(2)
  },
  phone: {
    transition: 'color .15s ease-in-out',
    fontSize: 24,
    lineHeight: 1.16,
    fontWeight: 400,
    letterSpacing: 0,
    position: 'relative',
    top: -1,
    marginBottom: 2,
    whiteSpace: 'nowrap',
    outline: 0,
    textAlign: 'right',
    '& > a': {
      color: 'rgba(0,0,0,.8)',
    }
  },
  signature: {
    color: 'rgba(0,0,0,.4)',
    fontSize: 13,
    textAlign: 'right',
    marginTop: 'auto'
  }
}));