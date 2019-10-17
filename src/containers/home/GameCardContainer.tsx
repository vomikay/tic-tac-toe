import { connect } from "react-redux";
import { IState, State, Result, GameAction } from "../../redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import GameCard from "../../components/home/GameCard";
import { push } from "connected-react-router";

type Props = {
  id: number;
  owner: string;
  opponent: string;
  state: State;
  result: Result;
  duration: number;
};

const mapStateToProps = (state: IState, ownProps: Props) => ({
  ...ownProps
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, GameAction>,
  { id }: Props
) => bindActionCreators({ onJoin: () => push(`game/${id}`) }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCard);
