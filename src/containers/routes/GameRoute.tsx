import React from "react";
import { RouteComponentProps } from "react-router";
import { IState } from "../../redux";
import { connect } from "react-redux";
import NotFound from "../layouts/NotFound/NotFound";
import Game from "../layouts/Game/Game";

type OwnProps = RouteComponentProps<{ id: string }>;
type Props = { gameId?: number };

const mapStateToProps = ({ games }: IState, { match }: OwnProps) => {
  const id = match.params.id;
  const isValid = !!Object.keys(games).find(gameId => gameId === id);
  return isValid ? { gameId: +id } : undefined;
};

const ReactRouter: React.FC<Props> = ({ gameId }) => {
  return gameId ? <Game gameId={gameId} /> : <NotFound />;
};

export default connect(mapStateToProps)(ReactRouter);
