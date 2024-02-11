import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  userId: null, // Use email as userId
  Name: "",
  Email: "",
  Password: "",
};

const LoginSlice = createSlice({
  name: "Login",
  initialState: initialState,

  reducers: {
    setLoggedinState(state, action) {
      state.isLoggedin = action.payload;
    },
    setLogin(state, action) {
      const { email, name, securityCode, isLogged } = action.payload;
      state.userId = email; // Use email as userId
      state.Name = name;
      state.Email = email;
      state.Password = securityCode;
      state.isLoggedin = isLogged;
    },
  },
});

export const { setLogin, setLoggedinState } = LoginSlice.actions;
export default LoginSlice.reducer;
