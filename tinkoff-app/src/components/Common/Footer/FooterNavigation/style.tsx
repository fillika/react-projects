import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(theme => createStyles({
  wrapper: {
    backgroundColor: theme.palette.grey[500],
    paddingTop: theme.spacing(3)
  }
}));