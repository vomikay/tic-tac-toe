import { Theme, createStyles } from "@material-ui/core";

export default (theme: Theme) =>
  createStyles({
    createButton: {
      backgroundColor: "#009688",
      color: "#fff",
      right: 24,
      bottom: 24,
      [theme.breakpoints.up("sm")]: {
        position: "absolute"
      },
      [theme.breakpoints.down("xs")]: {
        position: "fixed"
      }
    }
  });
