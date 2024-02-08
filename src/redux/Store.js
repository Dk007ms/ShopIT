import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./Slices/CartSlice";

// Define function to load state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

// Define function to save state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

// Load the initial state from localStorage
const preloadedState = loadStateFromLocalStorage();

// Create Redux store with preloaded state and subscribe to store changes for saving state to localStorage
export const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
  },
  preloadedState: preloadedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
