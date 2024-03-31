import React from "react";
import { IMG_CDN } from "../utils/constants";
import defaultPoster from "../static/default.jpg";
import MovieDetails from "./MovieDetails";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../utils/movieSlice";

const MovieCard = ({ posterPath, id }) => {
	const dispatch = useDispatch();
	const handleMovieClick = () => {
		dispatch(addSelectedMovie(id));
	};

	return (
		<div className='w-36 md:w-56 pr-4'>
			<img
				alt='Movie Card'
				src={posterPath ? IMG_CDN + posterPath : defaultPoster}
				onClick={handleMovieClick}
			/>
		</div>
	);
};

export default MovieCard;
