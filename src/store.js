import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/productsReducers";

const reducer = combineReducers({
  productList: productsReducer,
 });

const store = configureStore({ reducer });

export default store;
