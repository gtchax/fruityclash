import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const item = action.payload;

        const existItem = state.cartItems.find(x => x.Id === item._id)
        if(existItem) {
            state.cartItems
        }
    }
  },
});

export default cartSlice.reducer
