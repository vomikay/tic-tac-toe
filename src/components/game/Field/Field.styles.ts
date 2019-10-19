import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    borderCollapse: "collapse"
  },
  row: {
    border: "0 none",
    "&:first-of-type": {
      borderBottom: "6px solid #f7cb37"
    },
    "&:last-of-type": {
      borderTop: "6px solid #f7cb37"
    }
  },
  cell: {
    textAlign: "center",
    padding: 0,
    border: "0 none",
    "&:first-of-type": {
      borderRight: "6px solid #f7cb37"
    },
    "&:last-of-type": {
      borderLeft: "6px solid #f7cb37"
    }
  }
});
