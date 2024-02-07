import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addtoCart() {},
    clearCart() {},
  },
});

export const { addtoCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
