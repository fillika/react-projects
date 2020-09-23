import { createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => createStyles({
  wrapper: {
    backgroundColor: theme.palette.grey[500],
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }
}))