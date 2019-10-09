import React from "react";
import MainLayout from "./MainLayout";
import GameListContainer from "../../containers/GameListContainer";

const HomeLayout = () => {
  return (
    <MainLayout>
      <GameListContainer />
    </MainLayout>
  );
};

export default HomeLayout;
