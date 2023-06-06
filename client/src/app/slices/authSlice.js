import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, user: null },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      const jwt = jwtDecode(accessToken);
      const name = jwt?.name;
      state.token = accessToken;
      state.user = name;
    },
    checkLogin: (state) => {
      let token = localStorage.getItem("token");
      if (token) {
        const jwt = jwtDecode(token);
        const name = jwt?.name;
        state.token = token;
        state.user = name;
      }
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
});

export const { setCredentials, logOut, checkLogin } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
