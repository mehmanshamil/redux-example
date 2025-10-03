import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  category: [],
  categorFilter: [],
};

export const getApiProducts = createAsyncThunk("GetApi", async () => {
  try {
    const { data } = await axios.get(
      "https://655f2b37879575426b44b8f7.mockapi.io/productss"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

const getFilterCategory = (data) => {
  let newCategory = new Set(data.map((item) => item.category));
  return Array.from(newCategory);
};

export const productSlice = createSlice({
  name: "Products",
  // ilkin baslangic deyeri
  initialState,
  // functionlari saxlayan bolme
  reducers: {
    getFilter: (state,action) => {
      state.categorFilter = state.data.filter((item) => item.category == action.payload)
    },
  },
  // api emeliyyati zamani isdifade edirik
  extraReducers: (builder) => {
    builder.addCase(getApiProducts.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getApiProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.category = getFilterCategory(state.data);
        state.categorFilter = action.payload
      });
  },
});

export const { getFilter } = productSlice.actions;

export default productSlice.reducer;
