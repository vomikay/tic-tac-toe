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
  userName: string;
  isValid: boolean;
};

const mapStateToProps = ({ userName }: IState) => ({ userName });

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IState, undefined, GameAction | UserAction>
) => bindActionCreators({ onCreate: create, onInput: inputName }, dispatch);

class Home extends React.Component<Props, State> {
  state = { userName: "", isValid: true };

  onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { onInput } = this.props;
    const { value } = e.target;
    this.setState({ userName: value, isValid: true });
    onInput(value);
  };

  onCreateGame = () => {
    const { onCreate } = this.props;
    const { userName } = this.state;
    if (userName) {
      onCreate();
    } else {
      this.setState({ userName: "", isValid: false });
    }
  };

  render() {
    const { classes, userName } = this.props;
    const { isValid } = this.state;
    return (
      <Layout>
        <TextField
          required
          error={!isValid}
          placeholder="Enter your name"
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
