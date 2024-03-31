import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		popularMovies: null,
		topRatedMovies: null,
		upcomingMovies: null,
		trailerVideo: null,
		selectedMovie: null,
		selectedMovieDetails: null,
		isMoviePage: false,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
		addSelectedMovie: (state, action) => {
			state.selectedMovie = action.payload;
		},
		addSelectedMovieDetails: (state, action) => {
			state.selectedMovieDetails = action.payload;
		},
		setIsMoviePage: (state, action) => {
			state.isMoviePage = action.payload;
		},
	},
});
export const {
	addNowPlayingMovies,
	addTrailerVideo,
	addPopularMovies,
	addUpcomingMovies,
	addTopRatedMovies,
	addSelectedMovie,
	addSelectedMovieDetails,
	setIsMoviePage,
} = moviesSlice.actions;
export default moviesSlice.reducer;
