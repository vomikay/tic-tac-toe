import React from "react";
import "./CreateGameButton.css";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

type Props = {
  onCreate: (size?: number) => void;
};

const CreateGameButton: React.FC<Props> = ({ onCreate }) => {
  return (
    <Fab className="create-game" onClick={() => onCreate()}>
      <Add fontSize="large" />
    </Fab>
  );
};

export default CreateGameButton;
