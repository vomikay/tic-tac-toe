import React from "react";
import Layout from "../../components/layout/Layout";
import NameInput from "./NameInput";
import GameCardList from "./GameCardList";
import CreateGameButton from "./CreateGameButton";

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
