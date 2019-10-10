import React from "react";
import "./PlayerNameInput.css";

type Props = {
  onChange: (name: string) => void;
};

const PlayerNameInput: React.FC<Props> = ({ onChange: onInput }) => {
  return (
    <div className="player-name-input">
      <input
        className="player-name-input__editor"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onInput(e.target.value)
        }
      />
      <span className="player-name-input__highlight"></span>
    </div>
  );
};

export default PlayerNameInput;
