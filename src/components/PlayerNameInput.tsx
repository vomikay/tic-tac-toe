import React from "react";
import "./PlayerNameInput.css";

type Props = {
  onChange: (name: string) => void;
};

const PlayerNameInput: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="player-name-input">
      <input
        className="player-name-input__editor"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
      <span className="player-name-input__highlight"></span>
    </div>
  );
};

export default PlayerNameInput;
