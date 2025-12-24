import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchListMovie = createAsyncThunk(
  "listMovie/fetchListMovie",
  async (__, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "get",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5MCIsIkhldEhhblN0cmluZyI6IjI5LzA1LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc4MDAxMjgwMDAwMCIsIm5iZiI6MTc1MzAzMDgwMCwiZXhwIjoxNzgwMTYwNDAwfQ.KkGRtLpEsgoM4M_TapjOZIzvAwbay3QvXIwwN8XUqWk",
        },
      });
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const listMovieSlice = createSlice({
  name: "listMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchListMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchListMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default listMovieSlice.reducer;
