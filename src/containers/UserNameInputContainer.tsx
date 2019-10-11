import { connect } from "react-redux";
import { Dispatch } from "react";
import { UserAction, inputUserName } from "../actions/user";
import UserNameInput from "../components/UserNameInput";

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  onChange: (name: string) => dispatch(inputUserName(name))
});

const UserNameInputContainer = connect(
  null,
  mapDispatchToProps
)(UserNameInput);

export default UserNameInputContainer;
