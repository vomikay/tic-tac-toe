import React, { ChangeEvent } from "react";
import { TextField } from "@material-ui/core";

type Props = {
  onChange: (name: string) => void;
};

const UserNameInput: React.FC<Props> = ({ onChange }) => {
  return (
    <TextField
      placeholder="Введите имя"
      margin="normal"
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};

export default UserNameInput;
