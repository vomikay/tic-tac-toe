import React from "react";
import MainLayout from "./MainLayout";
import GameListContainer from "../../containers/GameListContainer";
import UserNameInputContainer from "../../containers/UserNameInputContainer";
import AddGameButtonContainer from "../../containers/AddGameButtonContainer";

const HomeLayout = () => {
  return (
    <MainLayout>
      <UserNameInputContainer />
      <GameListContainer />
      <AddGameButtonContainer />
    </MainLayout>
  );
};

export default HomeLayout;
