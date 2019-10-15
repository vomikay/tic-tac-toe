import GameCard from "../../components/home/GameCard";
import { AppState } from "../../store";
import { connect } from "react-redux";
import Game from "../../models/game";
import { ThunkDispatch } from "redux-thunk";
import { GameAction, joinGame } from "../../actions/game";
import { bindActionCreators } from "redux";

type Props = {
  game: Game;
};

const mapStateToProps = (state: AppState, { game }: Props) => ({
  game
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, GameAction>
) => bindActionCreators({ onClick: joinGame }, dispatch);

const GameCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCard);
export default GameCardContainer;
