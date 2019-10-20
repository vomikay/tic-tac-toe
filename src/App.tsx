import React from "react";
import { Switch, Route } from "react-router";
import Home from "./containers/layouts/Home/Home";
import NotFound from "./containers/layouts/NotFound/NotFound";
import GameRoute from "./containers/routes/GameRoute";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/game/:id" component={GameRoute} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
