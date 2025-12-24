import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailMovie } from "./slice.js";

function MovieDetail() {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.moviesDetailReducer);
  const { data } = state;

  useEffect(() => {
    dispatch(fetchDetailMovie(id));
  }, [id]);
  if (state.loading) return <div>Loading...</div>;

  return (
    <div>
      <p>Ma Phim: {data?.detail.maPhim}</p>
      <p>Ten Phim: {data?.detail.tenPhim}</p>
      <p>Bi Danh: {data?.detail.biDanh}</p>
      <img className="rounded-t-base" src={data?.detail.hinhAnh} alt={data?.detail.biDanh} />
    </div>
  );
}

export default MovieDetail;
