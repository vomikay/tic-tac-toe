import React from "react";
import "./AddGameButton.css";

type Props = {
  onClick: () => void;
};

const AddGameButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="fab" type="button" onClick={() => onClick()}>
      +
    </button>
  );
};

export default AddGameButton;
