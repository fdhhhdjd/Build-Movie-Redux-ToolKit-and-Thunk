import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../redux/MovieSlice";
import MovieCart from "../MovieCart/MovieCart";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      <>
        {movies.Search.map((item, index) => {
          return <MovieCart key={index} data={item} />;
        })}
      </>
    ) : (
      <>
        <div className="movie-error">
          <h2>{movies.Error}</h2>
        </div>
      </>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movie</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
