import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";
import searchReducer from "./searchReducer";
import videosReducer from "./videosReducer";

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  searchState: searchReducer,
  videosState: videosReducer
});