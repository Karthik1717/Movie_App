import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addActorsList } from "../utils/actorSlice";

const useActorDetails = () => {
	const dispatch = useDispatch();
	const selectedMovie = useSelector((store) => store.movies.selectedMovie);

	const getActorDetails = async () => {
		const movieDetails = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				selectedMovie +
				"/credits?language=en-US",
			API_OPTIONS
		);
		const json = await movieDetails.json();
		dispatch(addActorsList(json));
	};

	useEffect(() => {
		getActorDetails();
	}, []);
};

export default useActorDetails;
