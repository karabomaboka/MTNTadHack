//import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";
import * as firebase from "firebase";

import Main from "./navigation/Main";

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

if (!firebase.apps.length) {
  //firebase.initializeApp(firebaseConfig);
}
let store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export default function App() {
  const initialState = {
    personData: {},
  };

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
