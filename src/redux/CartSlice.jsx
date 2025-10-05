import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ➕ Add to Cart
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    // 🗑 Remove from Cart
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    // ⬆ Increase Quantity
    IncreaseQuantity: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },

    // ⬇ Decrease Quantity
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);

      if (findItem && findItem.quantity > 1) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, IncreaseQuantity, decreaseQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
