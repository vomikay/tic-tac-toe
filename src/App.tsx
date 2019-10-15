import React from "react";
import HomeLayout from "./components/layouts/HomeLayout";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store";
import { Switch, Route } from "react-router";
import GameLayoutContainer from "./containers/layouts/GameLayoutContainer";

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomeLayout} />
        <Route path="/game/:token" component={GameLayoutContainer} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
