import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/services/api";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const addUserService = createAsyncThunk(
  "admin/addUser",
  async (user, { rejectWithValue }) => {
    try {
        const result = await api.post(`QuanLyNguoiDung/ThemNguoiDung`, user)
        return result.data
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const addUserSlice = createSlice({
  name: "AddUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(addUserService.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(addUserService.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
      builder.addCase(addUserService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
});

export default addUserSlice.reducer;
