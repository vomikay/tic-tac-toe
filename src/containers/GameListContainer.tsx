import GameList from "../components/GameList";
import { connect } from "react-redux";
import { AppState } from "../store";

const mapStateToProps = (state: AppState) => ({
  games: state.games
});

const GameListContainer = connect(mapStateToProps)(GameList);
export default GameListContainer;
