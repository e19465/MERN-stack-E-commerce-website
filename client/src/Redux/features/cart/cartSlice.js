import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      state.products.push(action.payload);
    },

    increaseQuantity: (state, action) => {
      const price = action.payload.price;
      const itemsQuantity = action.payload.itemsQuantity;
      state.quantity += itemsQuantity;
      state.total += price * itemsQuantity;
    },

    removeProduct: (state, action) => {
      const deleteItemId = action.payload.uniqueId;
      const removingItemsQuantity = action.payload.itemsQuantity;
      const removingTotalPrice =
        action.payload.itemsQuantity * action.payload.price;
      state.products = state.products.filter(
        (product) => product.uniqueId !== deleteItemId
      );
      state.quantity = state.quantity - removingItemsQuantity;
      state.total = state.total - removingTotalPrice;
    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
