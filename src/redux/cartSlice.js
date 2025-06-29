import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity < 10) {
          existingItem.quantity += 1;
        }
      } else {
        state.push({ ...action.payload, quantity: 1 }); // 👈 add quantity field
      }
    },
    RemoveItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    IncrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity < 10) {
        item.quantity += 1;
      }
    },
    DecrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const { AddItem, RemoveItem, IncrementQuantity, DecrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
