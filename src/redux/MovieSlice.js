import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../common/Api/MovieApi";
import movieApi from "../common/Api/MovieApiKey";
//!thunk
export const GetApiHarry = createAsyncThunk(
  "movies/GetApiHarry ",
  async (term) => {
    const movieText = "Harry";
    const response = await movieApi.get(
      // `?apiKey=${APIKey}&s=${movieText}&type=movie`
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const GetShowListing = createAsyncThunk(
  "movies/GetShowListing",
  async (term) => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      // `?apiKey=${APIKey}&s=${seriesText}&type=series`
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);
//!id
export const GetShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [GetApiHarry.pending]: (state, action) => {
      console.log("Fetching Api from backend...");
    },
    [GetApiHarry.fulfilled]: (state, action) => {
      console.log("Done");
      return { ...state, movies: action.payload };
    },
    [GetApiHarry.rejected]: (state, action) => {
      console.log("Fall to get Movie...!");
    },
    //!Api Friend
    [GetShowListing.fulfilled]: (state, action) => {
      console.log("Done");
      return { ...state, shows: action.payload };
    },
    //!id
    [GetShowDetail.fulfilled]: (state, action) => {
      console.log("Done");
      return { ...state, selectMovieOrShow: action.payload };
    },
  },
});
const moviesReducer = movieSlice.reducer;
export const { addMovie, removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetail = (state) => state.movies.selectMovieOrShow;
export default moviesReducer;
