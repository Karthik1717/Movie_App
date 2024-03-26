import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
	return (
		<div className='w-56 pr-4'>
			<img alt='Movie Card' src={IMG_CDN + posterPath} />
		</div>
	);
};

export default MovieCard;
