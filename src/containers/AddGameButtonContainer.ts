import { connect } from "react-redux";
import AddGameButton from "../components/AddGameButton";
import { addGame, GameAction } from "../actions/game";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../store";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, GameAction>
) => ({
  onClick: () => dispatch(addGame())
});

const AddGameButtonContainer = connect(
  null,
  mapDispatchToProps
)(AddGameButton);

export default AddGameButtonContainer;
