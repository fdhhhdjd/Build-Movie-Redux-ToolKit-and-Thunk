import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../common/Api/MovieApi";
import movieApi from "../common/Api/MovieApiKey";
//!thunk
export const GetApi = createAsyncThunk("movie/GetApi ", async () => {
  const movieText = "Harry";
  const response = await movieApi.get(
    `?apiKey=${APIKey}&s=${movieText}&type=movie`
  );
  return response.data;
});

const initialState = {
  movies: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [GetApi.pending]: (state, action) => {
      console.log("Fetching Api from backend...");
    },
    [GetApi.fulfilled]: (state, action) => {
      console.log("Done");
      return { ...state, movies: action.payload };
    },
    [GetApi.rejected]: (state, action) => {
      console.log("Faill to get Movie...!");
    },
  },
});
const moviesReducer = movieSlice.reducer;
export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default moviesReducer;
