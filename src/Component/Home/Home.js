import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import movieApi from "../../common/Api/MovieApiKey";
import { APIKey } from "../../common/Api/MovieApi";
import { useDispatch } from "react-redux";
import { addMovie, GetApi } from "../../redux/MovieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetApi());
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
