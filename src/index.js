import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import { history, store } from "./store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router
      // eslint-disable-next-line react/no-children-prop
      children={routes}
      history={history}
    />
  </Provider>,
  document.querySelector("#root")
);
