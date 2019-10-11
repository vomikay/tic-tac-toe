import React from "react";
import GameList from "../components/GameList";
import Game from "../models/game";

class GameListContainer extends React.Component {
  private games: Game[] = [
    {
      token: "1",
      owner: "First Person",
      opponent: "",
      size: 3,
      duration: 123232,
      result: "",
      state: "ready",
      field: []
    },
    {
      token: "2",
      owner: "First Person",
      opponent: "Second Person",
      size: 3,
      duration: 342343,
      result: "",
      state: "playing",
      field: []
    },
    {
      token: "3",
      owner: "First Person",
      opponent: "Second Person",
      size: 3,
      duration: 3243223,
      result: "owner",
      state: "done",
      field: []
    },
    {
      token: "4",
      owner: "First Person",
      opponent: "Second Person",
      size: 3,
      duration: 1123213,
      result: "draw",
      state: "done",
      field: []
    }
  ];

  render() {
    return <GameList games={this.games} />;
  }
}

export default GameListContainer;
