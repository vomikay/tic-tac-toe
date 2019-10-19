import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#eee",
    [theme.breakpoints.up("sm")]: {
      width: 400,
      margin: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: 400,
      width: "100vw"
    }
  },
  header: {
    backgroundColor: "#000",
    padding: "16px 24px"
  },
  content: {
    padding: "10px 24px",
    alignSelf: "stretch"
  }
}));
