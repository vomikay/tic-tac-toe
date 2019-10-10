import React from "react";
import MainLayout from "./MainLayout";
import GameListContainer from "../../containers/GameListContainer";
import AddGameButton from "../AddGameButton";

const HomeLayout = () => {
  return (
    <MainLayout>
      <GameListContainer />
      <AddGameButton />
    </MainLayout>
  );
};

export default HomeLayout;
