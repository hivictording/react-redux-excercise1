import React from "react";
import { combineReducers, createStore, applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import "./App.css";

import Counter from "./components/counter";
import Cocktail from "./components/cocktail";

import { counterReducer } from "./reducers/counterReducer";
import { saveReducer } from './reducers/saveReducer';
import { cocktailReducer } from './reducers/cocktailReducer'

function App() {
  const middleware = [thunk];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const appStore = createStore(
    combineReducers({
      counterState: counterReducer,
      savedList: saveReducer,
      cocktailState: cocktailReducer
    }),
    composeEnhancers(applyMiddleware(...middleware))
  );

  return (
    <Provider store={appStore}>
      <Counter name="Animal" />
      <Cocktail name="Mario"/>
    </Provider>
  );
}

export default App;
