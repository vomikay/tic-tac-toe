import React from "react";
import Layout from "./Layout";
import GameListContainer from "../../containers/home/GameListContainer";
import UserNameInputContainer from "../../containers/home/UserNameInputContainer";
import AddGameButtonContainer from "../../containers/home/AddGameButtonContainer";

const HomeLayout = () => {
  return (
    <Layout>
      <UserNameInputContainer />
      <GameListContainer />
      <AddGameButtonContainer />
    </Layout>
  );
};

export default HomeLayout;
