import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import logger from "redux-logger";
import rootSaga from "./sagas/index";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
export const browserHistory = createBrowserHistory();

export const store = applyMiddleware(
  logger,
  sagaMiddleware,
  routerMiddleware(browserHistory)
)(createStore)(reducers, {});

sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);
