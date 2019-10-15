import React from "react";
import "./CreateGameButton.css";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

type Props = {
  onClick: () => void;
};

const CreateGameButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Fab className="add-game" onClick={() => onClick()}>
      <Add fontSize="large" />
    </Fab>
  );
};

export default CreateGameButton;
