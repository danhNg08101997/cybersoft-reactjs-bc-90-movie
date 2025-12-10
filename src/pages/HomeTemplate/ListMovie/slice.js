import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const listMovieSlice = createSlice({
    name: 'listMovie',
    initialState,
    reducers: {}
})

export default listMovieSlice.reducer