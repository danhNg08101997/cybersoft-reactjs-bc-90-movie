import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailMovie} from "./slice.js";

function MovieDetail() {
    const params = useParams();
    const {id} = params;
    const dispatch = useDispatch();
    const state = useSelector((state) => state.moviesDetailReducer)
    const {data} = state
    console.log("🚀 ~ MovieDetail ~ data: ", data);

    useEffect(() => {
        dispatch(fetchDetailMovie(id));
    },[id])
    if (state.loading) return (<div>Loading...</div>)

    return (
        <div>
            <p>Ma Phim: {data?.maPhim}</p>
            <p>Ten Phim: {data?.tenPhim}</p>
            <p>Bi Danh: {data?.biDanh}</p>
            <img  className="rounded-t-base" src={data?.hinhAnh} alt={data?.biDanh} />
        </div>
    );
}

export default MovieDetail;