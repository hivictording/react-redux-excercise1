import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";

import Counter from "./components/counter";
import Cocktail from "./components/cocktail";

import { counterReducer } from "./reducers/counterReducer";

function App() {
  const appStore = createStore(
    combineReducers({
      counterState: counterReducer,
    })
  );

  return (
    <Provider store={appStore}>
      <Counter name="Animal" />
      <Cocktail />
    </Provider>
  );
}

export default App;
