import React, { ChangeEvent } from "react";
import Layout from "../Layout/Layout";
import GameList from "../../home/GameList/GameList";
import { TextField, Fab, withStyles } from "@material-ui/core";
import { IState, GameAction, create, inputName } from "../../../redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import UserAction from "../../../redux/modules/user/UserAction";
import { Add } from "@material-ui/icons";
import { connect } from "react-redux";
import styles from "./Home.styles";
import { WithStyles } from "@material-ui/core/styles";

type Props = WithStyles<typeof styles> & {
  userName: string;
  onInput: (value: string) => void;
  onCreate: () => void;
};

type State = {
  isError: boolean;
};

const mapStateToProps = ({ userName }: IState) => ({ userName });

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, GameAction | UserAction>
) => bindActionCreators({ onCreate: create, onInput: inputName }, dispatch);

class Home extends React.Component<Props, State> {
  state = { isError: false };

  onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { onInput } = this.props;
    const { value } = e.target;
    this.setState({ isError: false });
    onInput(value);
  };

  onCreateGame = () => {
    const { userName, onCreate } = this.props;
    if (userName) {
      onCreate();
    } else {
      this.setState({ isError: true });
    }
  };

  render() {
    const { classes, userName } = this.props;
    const { isError } = this.state;
    return (
      <Layout>
        <TextField
          placeholder="Enter your name"
          required
          error={isError}
          margin="normal"
          value={userName}
          onChange={this.onChangeInput}
        />
        <GameList />
        <Fab className={classes.createButton} onClick={this.onCreateGame}>
          <Add fontSize="large" />
        </Fab>
      </Layout>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
