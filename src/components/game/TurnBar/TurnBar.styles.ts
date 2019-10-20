import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 10,
    marginBottom: 10
  },
  name: {
    display: "inline-block"
  },
  xTurn: {
    display: "inline-block",
    marginLeft: 5,
    color: "#bbb"
  },
  oTurn: {
    display: "inline-block",
    marginRight: 5,
    color: "#4395c7"
  }
});
