import React from "react";
import MainLayout from "./MainLayout";
import GameListContainer from "../../containers/GameListContainer";
import AddGameButton from "../AddGameButton";
import UserNameInputContainer from "../../containers/UserNameInputContainer";

const HomeLayout = () => {
  return (
    <MainLayout>
      <UserNameInputContainer />
      <GameListContainer />
      <AddGameButton />
    </MainLayout>
  );
};

export default HomeLayout;
