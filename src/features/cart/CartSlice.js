import { createSlice } from "@reduxjs/toolkit/";
import cartItems from "../../CartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseItem: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseItem: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount - 1;
    },
  },
});
export const { clearCart, removeItem, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
