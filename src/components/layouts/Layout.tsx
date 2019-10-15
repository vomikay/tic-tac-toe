import React from "react";
import "./Layout.css";
import { AppBar, Typography } from "@material-ui/core";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <AppBar className="header" position="static">
        <Typography className="header__title" variant="h6">
          Tic tac toe
        </Typography>
      </AppBar>
      <main className="main-content">{children}</main>
    </>
  );
};

export default MainLayout;
