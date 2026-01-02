import {configureStore} from "@reduxjs/toolkit"
import listMovieReducer from "../pages/HomeTemplate/ListMovie/slice.js"
import moviesDetailReducer from "../pages/HomeTemplate/Detail/slice.js"
import authReducer from "../pages/AdminTemplate/Auth/slice.js"
import addUserReducer from "../pages/AdminTemplate/AddUser/slice.js"

const store = configureStore({
    reducer: {
        //child
        listMovieReducer,
        moviesDetailReducer,
        authReducer,
        addUserReducer,
    },
})

export default store;