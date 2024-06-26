import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className='w-full aspect-video pt-[20%] pl-6 md:pl-24 absolute text-white bg-gradient-to-r from-black'>
			<h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
			<p className='py-6 text-lg w-1/4 hidden md:inline-block'>
				{overview}
			</p>
			<div className=''>
				<button className='bg-white text-black py-1 md:py-4 px-3 my-4 md:my-0 md:px-12 text-xl rounded-lg hover:bg-opacity-80'>
					<FontAwesomeIcon icon={faPlay} />
					Play
				</button>
				<button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hidden md:inline-block'>
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
