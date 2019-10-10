import React from "react";
import "./PlayerNameInput.css";

const PlayerNameInput: React.FC = () => {
  return (
    <div className="player-name-input">
      <input className="player-name-input__editor" type="text" />
      <span className="player-name-input__highlight"></span>
    </div>
  );
};

export default PlayerNameInput;
