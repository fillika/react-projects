import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(({ spacing }) => createStyles({
  wrapper: {
    boxShadow: 'inset 0 1px 0 0 rgba(231,232,234,.6)'
  },
  menu: {
    fontSize: 13,
  },
  headLinkWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: 'inset 0 1px 0 0 rgba(231,232,234,.6)',
    alignItems: 'center'
  },
  headLink: {
    paddingTop: spacing(2) + 1,
    paddingBottom: spacing(2) - 1,
    color: 'rgba(0,0,0,.4)',
    textTransform: 'uppercase',
    width: '100%',
    display: 'inline-block',
    '&:hover': {
      color: '#1464cc'
    }
  },
  subMenu: {
    marginLeft: spacing(),
    paddingBottom: spacing(2)
  },
  subMenuLink: {
    paddingTop: spacing() - 5,
    paddingBottom: spacing() - 1,
    color: 'rgba(0,0,0,.4)',
    display: 'inline-block',
    '&:hover': {
      color: '#1464cc'
    }
  },
  nonActive: {
    maxHeight: 0,
    overflow: 'hidden',
    transition: '300ms linear'
  },
  isActive: {
    maxHeight: '20rem',
  },
  svg: {
    color: 'rgba(0,0,0,.4)',
    transition: '300ms linear',
    transform: 'rotate(0)'
  },
  svgActive: {
    transform: 'rotate(180deg)'
  }
}));