import { FieldValue, IState, GameAction, doStep } from "../../redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import GameCell from "../../components/game/GameCell/GameCell";

type OwnProps = {
  id: number;
  row: number;
  column: number;
  value: FieldValue;
};

const mapStateToProps = (state: IState, { value }: OwnProps) => ({ value });

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, GameAction>,
  { id, row, column }: OwnProps
) => bindActionCreators({ onClick: () => doStep(id, row, column) }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCell);
