import React from "react";
import MainLayout from "./MainLayout";
import GameListContainer from "../../containers/GameListContainer";
import AddGameButton from "../AddGameButton";
import PlayerNameInputContainer from "../../containers/PlayerNameInputContainer";

const HomeLayout = () => {
  return (
    <MainLayout>
      <PlayerNameInputContainer />
      <GameListContainer />
      <AddGameButton />
    </MainLayout>
  );
};

export default HomeLayout;
