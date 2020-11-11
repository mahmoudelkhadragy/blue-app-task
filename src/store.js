import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  productDetailsReducer,
  productsReducer,
} from "./reducers/productsReducers";

const reducer = combineReducers({
  productList: productsReducer,
  productDetails: productDetailsReducer,
});

const store = configureStore({ reducer });

export default store;
