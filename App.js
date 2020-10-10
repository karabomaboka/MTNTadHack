//import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

//let store = createStore(allReducers);

import Main from "./navigation/Main";

export default function App() {
  return <Main />;
}
