import thunk from "redux-thunk";
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

const reducer = combineReducers({})
const initialState = {};

const store = configureStore(reducer, initialState);

export default store;
