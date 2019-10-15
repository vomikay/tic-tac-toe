import React, { ChangeEvent } from "react";
import { TextField } from "@material-ui/core";

type Props = {
  value: string;
  onChange: (name: string) => void;
};

const UserNameInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <TextField
      placeholder="Введите имя"
      margin="normal"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};

export default UserNameInput;
