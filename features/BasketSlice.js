import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        // >=0 means if index was not found we would have -1
        newBasket.splice(index, 1);
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, incrementByAmount } =
  basketSlice.actions;
export const selectBaseketItems = (state) => state.basket.items;
export const selectBaseketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id == id);
export default basketSlice.reducer;
export const selectBaseketTotal = (state) => {
  return state.basket.items.reduce((total, item) => {
    return (total += item.price);
  }, 0);
};
