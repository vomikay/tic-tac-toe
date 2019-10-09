import React from "react";
import "./MainLayout.css";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Tic Tac Toe</h1>
      </header>
      <main className="main-content">{children}</main>
    </>
  );
};

export default MainLayout;
