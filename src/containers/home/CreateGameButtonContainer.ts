import { connect } from "react-redux";
import CreateGameButton from "../../components/home/CreateGameButton";
import { createGame, GameAction } from "../../actions/game";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../store";
import { bindActionCreators } from "redux";

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, undefined, GameAction>
) => bindActionCreators({ onCreate: createGame }, dispatch);

const CreateGameButtonContainer = connect(
  null,
  mapDispatchToProps
)(CreateGameButton);

export default CreateGameButtonContainer;
