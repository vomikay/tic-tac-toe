import React from "react";
import useStyles from "./Layout.styles";
import { AppBar, Typography } from "@material-ui/core";

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="sticky">
        <Typography variant="h6" component="h1">
          Tic tac toe
        </Typography>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Layout;
