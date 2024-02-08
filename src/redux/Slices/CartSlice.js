import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addtoCart(state, action) {
      state.push(action.payload);
    },
    clearCart(state, action) {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addtoCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
