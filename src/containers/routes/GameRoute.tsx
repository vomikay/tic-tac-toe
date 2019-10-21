import React from "react";
import { RouteComponentProps, Redirect } from "react-router";
import { IState } from "../../redux";
import { connect } from "react-redux";
import Game from "../layouts/Game/Game";

type OwnProps = RouteComponentProps<{ id: string }>;
type Props = { gameId?: number };

const mapStateToProps = ({ games }: IState, { match }: OwnProps) => {
  const id = match.params.id;
  const isValid = !!Object.keys(games).find(gameId => gameId === id);
  return isValid ? { gameId: +id } : undefined;
};

const ReactRouter: React.FC<Props> = ({ gameId }) => {
  return gameId ? <Game gameId={gameId} /> : <Redirect to="/404" />;
};

export default connect(mapStateToProps)(ReactRouter);
