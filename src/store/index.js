import {configureStore} from "@reduxjs/toolkit"
import listMovieReducer from "../pages/HomeTemplate/ListMovie/slice.js"

const store = configureStore({
    reducer: {
        //child
        listMovieReducer,
    },
})

export default store;