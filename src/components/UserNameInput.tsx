import React from "react";
import "./UserNameInput.css";

type Props = {
  onChange: (name: string) => void;
};

const UserNameInput: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="user-name-input">
      <input
        className="user-name-input__editor"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
      <span className="user-name-input__highlight"></span>
    </div>
  );
};

export default UserNameInput;
