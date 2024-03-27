import React from "react";
import { IMG_CDN } from "../utils/constants";
import defaultPoster from "../static/default.jpg";

const MovieCard = ({ posterPath }) => {
	return (
		<div className='w-56 pr-4'>
			<img
				alt='Movie Card'
				src={posterPath ? IMG_CDN + posterPath : defaultPoster}
			/>
		</div>
	);
};

export default MovieCard;
