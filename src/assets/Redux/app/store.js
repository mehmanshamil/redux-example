import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/Counter/CounterSlice";
import productSlice  from "../features/Product/ProductSlice";

export const store = configureStore({
  reducer: {
    count: counterSlice,
    products : productSlice
  },
});
