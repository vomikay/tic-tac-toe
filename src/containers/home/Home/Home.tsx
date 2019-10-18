import React from "react";
import Layout from "../../../components/layout/Layout/Layout";
import NameInput from "../NameInput/NameInput";
import GameCardList from "../GameCardList/GameCardList";
import CreateGameButton from "../GameCreateButton/CreateGameButton";

const Home = () => {
  return (
    <Layout>
      <NameInput />
      <GameCardList />
      <CreateGameButton />
    </Layout>
  );
};

export default Home;
