//import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";
import * as firebase from "firebase";
import Main from "./navigation/Main";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA_cghLM9A6joH0qz23yFWaV8a6-4ZKWjs",
  authDomain: "peertopeer-b7cca.firebaseapp.com",
  databaseURL: "https://peertopeer-b7cca.firebaseio.com",
  projectId: "peertopeer-b7cca",
  storageBucket: "peertopeer-b7cca.appspot.com",
  messagingSenderId: "42458607567",
  appId: "1:42458607567:web:64ffd7400597bd34aeacba",
  measurementId: "G-PTVLYV3QG9",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
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
