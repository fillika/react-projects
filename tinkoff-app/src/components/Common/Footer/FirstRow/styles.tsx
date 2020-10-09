import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(({ spacing, breakpoints }) => createStyles({
  wrapper: {
    paddingTop: spacing(2) - 3,
    paddingBottom: spacing(1) + 4,
    marginTop: spacing(16),
    [breakpoints.up('lg')]: {
      boxShadow: 'inset 0 1px 0 0 #e7e8ea',
    }
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
    textAlign: 'center',
    '& > a': {
      color: 'rgba(0,0,0,.8)',
    },
    [breakpoints.up('lg')]: {
      textAlign: 'right',

    }
  },
  signature: {
    color: 'rgba(0,0,0,.4)',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: spacing(2),
    [breakpoints.up('lg')]: {
      textAlign: 'right',
      marginBottom: 0,
    }
  },
  contacts: {
    margin: '0 auto'
  }
}));