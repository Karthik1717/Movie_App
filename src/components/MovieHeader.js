import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";

const MovieHeader = () => {
	const { selectedMovieDetails } = useSelector((store) => store.movies);
	const {
		title,
		overview,
		poster_path,
		release_date,
		runtime,
		tagline,
		genres,
	} = selectedMovieDetails;

	return (
		<div className='flex flex-row pt-[10%] text-white ml-[8%] absolute z-50'>
			<div className='w-1/4'>
				<img
					className='w-[85%]'
					src={`${IMG_CDN}${poster_path}`}
					alt='background'
				/>
			</div>
			<div className='pl-4 w-3/4'>
				<h1 className='text-8xl font-bold pt-8'>{title}</h1>
				<div className='flex pt-20 w-[70%] items-center'>
					<div className='flex items-center'>
						<span className='text-3xl font-bold mb-2 '>
							Release:{" "}
						</span>
						<div className='ml-2 bg-gray-600 rounded-lg py-2 text-lg w-[140px] flex justify-center'>
							{release_date}
						</div>
					</div>
					<div className='ml-12 flex items-center'>
						<span className='text-3xl font-bold mb-2'>Genre: </span>
						{genres?.map((genre) => (
							<div className='ml-2 bg-gray-600 rounded-lg py-2 text-lg w-[140px] flex justify-center'>
								{genre.name}
							</div>
						))}
					</div>
					<div className='ml-12 flex items-center'>
						<span className='text-3xl font-bold mb-2'>
							Duration:
						</span>
						<div className='ml-2 bg-gray-600 rounded-lg py-2 text-lg w-[140px] flex justify-center'>
							<span>{runtime} minutes</span>
						</div>
					</div>
				</div>
				{tagline && (
					<div className='pt-20'>
						<span className='text-3xl font-bold'>Tagline: </span>
						<span className='ml-2 text-3xl italic'>{tagline}</span>
					</div>
				)}
				<div className='pt-24 text-2xl w-[85%]'>
					<span className='text-3xl font-bold'>Overview:</span>
					<p className='pt-2 italic'>{overview}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieHeader;
