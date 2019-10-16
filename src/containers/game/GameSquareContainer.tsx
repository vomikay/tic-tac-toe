import GameSquare from "../../components/game/GameSquare";
import { GameFieldValue } from "../../models/game";
import { AppState } from "../../store";
import { bindActionCreators } from "redux";
import { doStep, GameAction } from "../../actions/game";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

type Props = {
  gameId: number;
  row: number;
  column: number;
  value: GameFieldValue;
};

const mapStateToProps = (state: AppState, { value }: Props) => ({ value });

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, GameAction>,
  { gameId, row, column }: Props
) =>
  bindActionCreators({ onClick: () => doStep(gameId, row, column) }, dispatch);

const GameSquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSquare);

export default GameSquareContainer;
