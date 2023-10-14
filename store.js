import { configureStore } from "@reduxjs/toolkit";
import basketREducer from "./features/BasketSlice";

export const store = configureStore({
  reducer: {
    basket: basketREducer,
  },
});
