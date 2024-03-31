import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, BACKDROP_CDN, IMG_CDN } from "../utils/constants";
import useMovieDetails from "../hooks/useMovieDetails";
import MovieHeader from "./MovieHeader";
import ActorList from "./ActorList";
import useActorDetails from "../hooks/useActorDetails";

const MovieDetails = () => {
	useMovieDetails();
	useActorDetails();

	const { selectedMovieDetails } = useSelector((store) => store.movies);
	// if (!selectedMovie) return null;
	if (!selectedMovieDetails) return null;
	const { backdrop_path } = selectedMovieDetails;
	console.log(backdrop_path);

	return (
		<>
			<Header />
			<MovieHeader />
			<div>
				<img
					className='object-cover w-screen h-[1100px] brightness-[25%]'
					src={`${BACKDROP_CDN}${backdrop_path}`}
					alt='background'
				/>
			</div>
			<ActorList />
		</>
	);
};

export default MovieDetails;
