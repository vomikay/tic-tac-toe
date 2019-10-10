import React from "react";
import MainLayout from "./MainLayout";
import GameListContainer from "../../containers/GameListContainer";
import AddGameButton from "../AddGameButton";
import PlayerNameInput from "../PlayerNameInput";

const HomeLayout = () => {
  return (
    <MainLayout>
      <PlayerNameInput />
      <GameListContainer />
      <AddGameButton />
    </MainLayout>
  );
};

export default HomeLayout;
