import { createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette, spacing }) => createStyles({
  wrapper: {
    backgroundColor: palette.grey[500],
    paddingTop: spacing(4),
    paddingBottom: spacing(4),
  },
  container: {
    display: 'flex',
    overflowX: 'scroll'
  },
  cardWrapper: {
    marginRight: '16px',
    display: 'flex',
    flexDirection: 'column'
  },
  cardTitle: {
    fontWeight: 700,
    paddingTop: spacing(2)
  },
  buttonWrapper: {
    paddingTop: spacing(2),
    marginTop: 'auto',
  },
  cardButton: {
    color: '#333',
    borderColor: '#333',
    paddingTop: 4,
    paddingLeft: spacing(1) + 3,
    paddingRight: spacing(1) + 3,
    paddingBottom: 2,
    minHeight: 30
  },
  cardLink: {
    fontSize: 13,
    '&:visited': {
      color: '#333',
    }
  }
}));