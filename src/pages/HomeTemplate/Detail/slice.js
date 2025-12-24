import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../services/api";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const fetchDetailMovie = createAsyncThunk(
  "detailMovie/fetchDetailMovie",
  async (arg, { rejectWithValue }) => {
    try {
      const [resultDetail, resultSchedule] = await Promise.all([
        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${arg}`),
        api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${arg}`),
      ]);
      const result = {
        detail: resultDetail.data.content,
        schedule: resultSchedule.data.content,
      };
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const movieDetails = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetailMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDetailMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDetailMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default movieDetails.reducer;
