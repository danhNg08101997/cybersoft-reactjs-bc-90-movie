import React, {useEffect} from 'react';
import {fetchListMovie} from "./slice.js";
import {useDispatch, useSelector} from "react-redux";
import Movie from "./Movie.jsx";

function ListMovie() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.listMovieReducer);

    useEffect(() => {
        dispatch(fetchListMovie());
    }, [])

    const renderListMovie = () => {
        const {data} = state
        return data?.map((movie) => <Movie key={movie.maPhim} data={movie} />)
    }

    if (state.loading) return (<div>Loading...</div>)


    return (
        <div className="container mx-auto grid grid-cols-4 gap-10">
            {renderListMovie()}
        </div>
    );
}

export default ListMovie;