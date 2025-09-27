import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: true,
};

export const getApiProducts = createAsyncThunk("GetApi", async () => {
  try {
    const data = await axios.get("https://dummyjson.com/products");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const productSlice = createSlice({
  name: "Products",
  // ilkin baslangic deyeri
  initialState,
  // functionlari saxlayan bolme
  reducers: {},
  // api emeliyyati zamani isdifade edirik
  extraReducers: (builder) => {
    builder.addCase(getApiProducts.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getApiProducts.fulfilled, (state, action) => {
        state.data = action.payload.data.products;
          state.loading = false;
      });
  },
});

// export const { getApi } = productSlice.actions;

export default productSlice.reducer;
