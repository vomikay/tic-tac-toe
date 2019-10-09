import React from "react";
import GameList from "../components/GameList";
import GameInfo from "../models/gameInfo";

class GameListContainer extends React.Component {
  private games: GameInfo[] = [
    {
      gameToken: "1",
      owner: "First Person",
      opponent: "",
      size: 3,
      gameDuration: 123232,
      gameResult: "",
      state: "ready"
    },
    {
      gameToken: "2",
      owner: "First Person",
      opponent: "Second Person",
      size: 3,
      gameDuration: 342343,
      gameResult: "",
      state: "playing"
    },
    {
      gameToken: "3",
      owner: "First Person",
      opponent: "Second Person",
      size: 3,
      gameDuration: 3243223,
      gameResult: "owner",
      state: "done"
    },
    {
      gameToken: "4",
      owner: "First Person",
      opponent: "Second Person",
      size: 3,
      gameDuration: 1123213,
      gameResult: "draw",
      state: "done"
    }
  ];

  render() {
    return <GameList games={this.games} />;
  }
}

export default GameListContainer;
