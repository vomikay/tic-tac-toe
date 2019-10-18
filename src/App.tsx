import React from "react";
import { Switch, Route } from "react-router";
import Home from "./containers/home/Home";
import Game from "./containers/game/Game";
import NotFound from "./components/layout/NotFound/NotFound";

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
