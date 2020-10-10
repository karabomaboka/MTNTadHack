import { combineReducers } from "redux";
import outstandingReducer from "./outstanding";
import loginReducer from "./login";

export const allReducers = combineReducers({
  outstanding: outstandingReducer,
  login: loginReducer,
});
