import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(({ spacing }) => createStyles({
  text: {
    color: 'rgba(0,0,0,.4)',
    fontSize: 13,
    lineHeight: 1.5384,
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    borderTop: '1px solid #e7e8ea'
  },
  link: {
    color: '#1771e6',
    fontWeight: 500
  }
}));