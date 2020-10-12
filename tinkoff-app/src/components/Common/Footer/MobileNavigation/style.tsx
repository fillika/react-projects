import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(({ spacing }) => createStyles({
  Menu: {
    fontSize: 13
  },
  headLinkWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headLink: {
    paddingTop: spacing(2) + 1,
    paddingBottom: spacing(2) - 1,
    color: 'rgba(0,0,0,.4)',
    textTransform: 'uppercase',
    display: 'inline-block'
  },
  subMenu: {
    marginLeft: spacing()
  },
  subMenuLink: {
    paddingTop: spacing() - 5,
    paddingBottom: spacing() - 1,
    color: 'rgba(0,0,0,.4)',
    display: 'inline-block'
  }
}));