import { connect } from "react-redux";
import { IState, State, Result, GameAction, join } from "../../redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import GameCard from "../../components/home/GameCard";

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
) => bindActionCreators({ onJoin: () => join(id) }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCard);
