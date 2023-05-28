import { configureStore } from "@reduxjs/toolkit";
import cardSlide from "./savice/cardSlide";

export const store = configureStore({
  reducer: {
    cart: cardSlide,
  },
});
