import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
	const { movieResults, movieNames } = useSelector((store) => store.gpt);
	if (!movieNames) return null;
	console.log(movieResults, "res");
	return (
		<div className='p-4 m-4 bg-black text-white bg-opacity-80'>
			<div>
				{movieNames.map((movieName, idx) =>
					movieResults[idx].length > 0 ? (
						<MovieList
							key={movieName}
							title={movieName}
							movies={movieResults[idx]}
						/>
					) : null
				)}
			</div>
		</div>
	);
};

export default GptMovieSuggestions;
