import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../../services/api";

const data = localStorage.getItem("USER_ADMIN") ? JSON.parse(localStorage.getItem("USER_ADMIN")) : null;

const initialState = {
    loading: false,
    data,
    error: null,
}

export const authService = createAsyncThunk(
    "auth/login",
    async (user, { rejectWithValue }) => {
        try {
            const response = await api.post("QuanLyNguoiDung/DangNhap", user);

            const role = response.data.content?.maLoaiNguoiDung;

            if (role === 'KhachHang') {
                return rejectWithValue(
                    {
                        response: {
                            data: {
                                content: "Bạn không có quyền truy cập trang này"
                            }
                        }
                    }
                )
            }

            const userInfoString = JSON.stringify(response.data.content)
            localStorage.setItem("USER_ADMIN", userInfoString);

            return response.data.content;

        }catch (error) {
            return rejectWithValue(error);
        }
})

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(authService.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(authService.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(authService.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
})

export default authSlice.reducer;