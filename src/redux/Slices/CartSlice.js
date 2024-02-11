import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addtoCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne(state, action) {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        return state.filter((item) => item.id !== id);
      }
    },
    clearCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    logOut(state) {
      return [];
    },
  },
});

export const { addtoCart, clearCart, removeOne, logOut } = CartSlice.actions;
export default CartSlice.reducer;
