import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // सभी products
  searchTerm: "", // search input value
  filteredData: [], // search के बाद filtered products
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredData = action.payload; // initial filteredData = सभी products
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
