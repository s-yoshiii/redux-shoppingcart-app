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
  reducers: {},
});

export default cartSlice.reducer;
