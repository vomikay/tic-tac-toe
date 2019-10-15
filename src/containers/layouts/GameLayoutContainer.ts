import { connect } from "react-redux";
import GameLayout from "../../components/layouts/GameLayout";
import { AppState } from "../../store";
import { RouteComponentProps } from "react-router";

type Props = RouteComponentProps<{ token: string }>;

const mapStateToProps = (state: AppState, ownProps: Props) => ({
  game: state.games[+ownProps.match.params.token - 1]
});

const GameLayoutContainer = connect(mapStateToProps)(GameLayout);

export default GameLayoutContainer;
