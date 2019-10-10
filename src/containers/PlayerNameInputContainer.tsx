import { connect } from "react-redux";
import { Dispatch } from "react";
import { PlayerAction, inputPlayerName } from "../actions/player";
import PlayerNameInput from "../components/PlayerNameInput";

const mapDispatchToProps = (dispatch: Dispatch<PlayerAction>) => ({
  onChange: (name: string) => dispatch(inputPlayerName(name))
});

const PlayerNameInputContainer = connect(
  null,
  mapDispatchToProps
)(PlayerNameInput);

export default PlayerNameInputContainer;
