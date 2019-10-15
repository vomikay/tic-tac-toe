import { connect } from "react-redux";
import { inputUserName } from "../../actions/user";
import UserNameInput from "../../components/home/UserNameInput";
import { AppState } from "../../store";

const UserNameInputContainer = connect(
  (state: AppState) => ({ value: state.user.name }),
  { onChange: inputUserName }
)(UserNameInput);

export default UserNameInputContainer;
