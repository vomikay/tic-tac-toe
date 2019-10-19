import { IState } from "../../../redux";
import Timer from "../../../components/common/Timer/Timer";
import { connect } from "react-redux";
import { TypographyProps } from "@material-ui/core/Typography";

type OwnProps = TypographyProps & { gameid: number };

const mapStateToProps = ({ games }: IState, { gameid, ...rest }: OwnProps) => {
  const { duration } = games[gameid];
  return { milliseconds: duration, ...rest };
};

export default connect(mapStateToProps)(Timer);
