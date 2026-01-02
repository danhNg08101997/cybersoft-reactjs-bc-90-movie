import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../../services/api";

const initialState = {
    loading: false,
    error: null,
    data: null,
};

export const addUserService = createAsyncThunk(
    "admin/addUser",
    async (user, {rejectWithValue}) => {
        try {

        }catch(error) {
            rejectWithValue(error);
        }
    }
)

const addUserSlice = createSlice(
    {
        name: "AddUser",
        initialState,
        reducers: {}
    }
)

export default addUserSlice.reducer;