import React from "react";
import Layout from "../Layout/Layout";
import NameInput from "../../home/NameInput/NameInput";
import GameList from "../../home/GameList/GameList";
import CreateGameButton from "../../home/CreateGameButton/CreateGameButton";

const Home = () => {
  return (
    <Layout>
      <NameInput />
      <GameList />
      <CreateGameButton />
    </Layout>
  );
};

export default Home;
