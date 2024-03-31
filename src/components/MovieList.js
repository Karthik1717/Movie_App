import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
	return (
		<div className='px-6 '>
			<h1 className='text-lg md:text-3xl py-4 px-0 md:px-6 text-white'>
				{title}
			</h1>
			<div className='flex overflow-x-scroll p-0 md:p-6 movie-list'>
				<div className='flex'>
					{movies?.map((movie) => (
						<Link to={`/${movie.id}`}>
							<MovieCard
								key={movie.id}
								id={movie.id}
								posterPath={movie.poster_path}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
