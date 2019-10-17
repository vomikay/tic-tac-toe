import React, { ChangeEvent } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { IState, inputName } from "../../redux";

type Props = {
  value: string;
  onInput: (value: string) => void;
};

const NameInput: React.FC<Props> = ({ value, onInput }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInput(e.target.value);
  };
  return (
    <TextField
      placeholder="Введите имя"
      margin="normal"
      value={value}
      onChange={onChange}
    />
  );
};

export default connect(
  (state: IState) => ({
    value: state.user.name
  }),
  { onInput: inputName }
)(NameInput);
