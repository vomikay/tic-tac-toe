import React from "react";
import Layout from "./Layout";
import GameListContainer from "../../containers/home/GameListContainer";
import UserNameInputContainer from "../../containers/home/UserNameInputContainer";
import CreateGameButtonContainer from "../../containers/home/CreateGameButtonContainer";

const HomeLayout = () => {
  return (
    <Layout>
      <UserNameInputContainer />
      <GameListContainer />
      <CreateGameButtonContainer />
    </Layout>
  );
};

export default HomeLayout;
