import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
	return (
		<>
			<div className='fixed w-full -z-20'>
				<img
					className='w-full h-screen object-cover'
					src={BG_URL}
					alt='background'
				/>
			</div>
			<div>
				<GptSearchBar />
				<GptMovieSuggestions />
			</div>
		</>
	);
};

export default GptSearch;
