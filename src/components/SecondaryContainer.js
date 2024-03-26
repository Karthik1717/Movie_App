import React from "react";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);
	return (
		movies && (
			<div className=' bg-black'>
				<div className='mt-[-30rem] relative z-20 pl-12'>
					<MovieList
						title='Now Playing'
						movies={movies.nowPlayingMovies}
					/>
					<MovieList title='Popular' movies={movies.popularMovies} />
					<MovieList
						title='Top Rated'
						movies={movies.topRatedMovies}
					/>
					<MovieList
						title='Upcoming'
						movies={movies.upcomingMovies}
					/>
				</div>
			</div>
		)
	);
};

export default SecondaryContainer;