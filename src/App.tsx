import React from "react";
import HomeLayout from "./components/layouts/HomeLayout";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store";
import { Switch, Route } from "react-router";
import GameLayout from "./components/layouts/GameLayout";

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomeLayout} />
        <Route path="/game" component={GameLayout} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
