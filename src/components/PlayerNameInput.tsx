import React from "react";
import "./PlayerNameInput.css";
import store from "../store";
import { inputPlayerName } from "../actions/player";

const PlayerNameInput: React.FC = () => {
  const onInputPlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    store.dispatch(inputPlayerName(name));
  };
  return (
    <div className="player-name-input">
      <input
        className="player-name-input__editor"
        type="text"
        onInput={onInputPlayerName}
      />
      <span className="player-name-input__highlight"></span>
    </div>
  );
};

export default PlayerNameInput;
