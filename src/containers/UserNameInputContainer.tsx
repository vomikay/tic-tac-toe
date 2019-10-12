import { connect } from "react-redux";
import { inputUserName } from "../actions/user";
import UserNameInput from "../components/UserNameInput";

const UserNameInputContainer = connect(
  null,
  { onChange: inputUserName }
)(UserNameInput);

export default UserNameInputContainer;
