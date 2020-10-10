import { combineReducers } from "redux";
import outstandingReducer from "./outstanding";
import loginReducer from "./login";

const allReducers = () =>
  combineReducers({
    outstanding: outstandingReducer,
    login: loginReducer,
  });

export default allReducers;
