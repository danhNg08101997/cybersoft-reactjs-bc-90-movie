import {configureStore} from "@reduxjs/toolkit"
import listMovieReducer from "../pages/HomeTemplate/ListMovie/slice.js"
import moviesDetailReducer from "../pages/HomeTemplate/Detail/slice.js"

const store = configureStore({
    reducer: {
        //child
        listMovieReducer,
        moviesDetailReducer,
    },
})

export default store;