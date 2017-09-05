import React from "react";
import { Route } from "react-router-dom";
import App from "./containers/AppContainer";
import Result from "./containers/ResultsContainer";
import Movie from "./components/Movie";

export default (
  <App>
    <Route exact path="/:query" component={Result} />
    <Route exact path="/movie/:movieId" component={Movie} />
  </App>
);
