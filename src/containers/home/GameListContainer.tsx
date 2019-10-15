import GameList from "../../components/home/GameList";
import { connect } from "react-redux";
import { AppState } from "../../store";

const mapStateToProps = ({ games }: AppState) => ({ games });

const GameListContainer = connect(mapStateToProps)(GameList);
export default GameListContainer;
