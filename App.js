//import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import * as firebase from "firebase";

//let store = createStore(allReducers);

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

firebase.initializeApp(firebaseConfig);

import Main from "./navigation/Main";

export default function App() {
  return <Main />;
}
