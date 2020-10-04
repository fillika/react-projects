import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(({ spacing }) => createStyles({
  wrapper: {
    boxShadow: 'inset 0 1px 0 0 #e7e8ea',
    paddingTop: spacing(2) - 3,
    paddingBottom: spacing(1) + 4,
    marginTop: spacing(16)
  },
  innerWrapper: {
    marginTop: 0,
    display: 'flex',
    justifyContent: 'space-between'
  },
  headLink: {
    color: '#333',
    fontSize: 15
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
    marginRight: spacing(2)
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