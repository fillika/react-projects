import { createStyles, makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(({ spacing }) => createStyles({
  wrapper: {
    color: 'rgba(0,0,0,.4)',
    fontSize: 13,
    lineHeight: 1.5384,
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    borderTop: '1px solid #e7e8ea',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));
