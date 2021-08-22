import { combineReducers } from "redux";
import AuthReducer from "./auth";
import loader from "./loader";

export default combineReducers({
  AuthReducer: AuthReducer,
  loader: loader,
});
