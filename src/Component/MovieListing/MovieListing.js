import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../redux/MovieSlice";
import MovieCart from "../MovieCart/MovieCart";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);
  let renderMovies,
    renderShows = "";
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
  //!show movie

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((item, index) => <MovieCart key={index} data={item} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movie</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Friend</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
