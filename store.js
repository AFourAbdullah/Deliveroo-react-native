import { configureStore } from "@reduxjs/toolkit";
import basketREducer from "./features/BasketSlice";
import restaurantReducer from "./features/RestaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketREducer,
    restaurant: restaurantReducer,
  },
});
