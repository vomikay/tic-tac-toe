import { connect } from "react-redux";
import AddGameButton from "../components/AddGameButton";
import { addGame, GameAction } from "../actions/game";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../store";
import { bindActionCreators } from "redux";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, GameAction>
) => bindActionCreators({ onClick: addGame }, dispatch);

const AddGameButtonContainer = connect(
  null,
  mapDispatchToProps
)(AddGameButton);

export default AddGameButtonContainer;
