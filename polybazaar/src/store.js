import { combineReducers, createStore } from "redux";

import { applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { getAllTypeReducers } from "./reducers/typeReducer";

const finalReducer = combineReducers({
  getAllTypeReducers: getAllTypeReducers,
});

const initialState = {};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
