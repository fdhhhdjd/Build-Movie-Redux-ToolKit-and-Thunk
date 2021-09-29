import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import movieApi from "../../common/Api/MovieApiKey";
import { APIKey } from "../../common/Api/MovieApi";
import { useDispatch } from "react-redux";
import { addMovie, GetApiHarry, GetShowListing } from "../../redux/MovieSlice";
import { ToastContainer, toast } from "react-toastify";
const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(GetApiHarry(movieText));
    dispatch(GetShowListing(showText));
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <ToastContainer />
      <MovieListing />
    </>
  );
};

export default Home;
