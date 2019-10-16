import { connect } from "react-redux";
import GameLayout from "../../components/layouts/GameLayout";
import { AppState } from "../../store";
import { RouteComponentProps } from "react-router";

type Props = RouteComponentProps<{ gameId: string }>;

const mapStateToProps = (state: AppState, { match }: Props) => {
  const { user, games } = state;
  const { name: userName } = user;
  const game = games[+match.params.gameId - 1];
  return {
    isWinner:
      game.result !== "" &&
      game.result !== "draw" &&
      userName === game[game.result],
    isLooser:
      game.result !== "" &&
      game.result !== "draw" &&
      userName !== game[game.result],
    draw: game.result === "draw",
    game
  };
};

const GameLayoutContainer = connect(mapStateToProps)(GameLayout);

export default GameLayoutContainer;
