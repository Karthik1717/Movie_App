import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSelectedMovieDetails, setIsMoviePage } from "../utils/movieSlice";
import { addGptMovieResults, toggleGptSearchView } from "../utils/gptSlice";

const useMovieDetails = () => {
	const dispatch = useDispatch();
	const selectedMovie = useSelector((store) => store.movies.selectedMovie);

	const getMovieDetails = async () => {
		const movieDetails = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				selectedMovie +
				"?language=en-US",
			API_OPTIONS
		);
		const json = await movieDetails.json();
		dispatch(addSelectedMovieDetails(json));
		dispatch(setIsMoviePage(true));
	};

	useEffect(() => {
		getMovieDetails();
		dispatch(toggleGptSearchView(false));
	}, []);
};

export default useMovieDetails;
