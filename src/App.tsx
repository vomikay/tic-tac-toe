import React from "react";
import { Switch, Route } from "react-router";
import Home from "./containers/layouts/Home/Home";
import Game from "./containers/layouts/Game/Game";
import NotFound from "./containers/layouts/NotFound/NotFound";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/game/:id" component={Game} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
