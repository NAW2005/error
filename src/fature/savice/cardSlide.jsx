import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

export const cardSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      }
      // state.quantity++;
      state.totalAmount += payload.price;
    },

    removefromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== payload.id);
      state.quantity--;
      state.totalAmount -= payload.price;
    },
    addItemsQuantity: (state, { payload }) => {
      // state.cartItems = state.cartItems.map((i) => {
      //   if (i.id === payload.id) {
      //     return [...i, i.quantity += 1];
      //   }
      // });
    },
  },
});

export const { addToCart, removefromCart  , addItemsQuantity} = cardSlide.actions;
export default cardSlide.reducer;
