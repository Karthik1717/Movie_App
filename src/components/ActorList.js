import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";

const ActorList = () => {
	const { actorsList } = useSelector((store) => store.actor);
	if (!actorsList) return null;
	const { cast } = actorsList;
	return (
		<div className='px-6 relative bg-black text-white '>
			<div className='text-4xl font-bold pt-10 pb-5'>Actors:</div>
			<div className=' flex overflow-x-scroll movie-list '>
				<div className='flex'>
					{cast?.map(
						(actor) =>
							actor.profile_path && (
								<div className='w-52 md:w-[17rem] pr-6 '>
									<img
										className='rounded-lg rounded-b-none'
										alt='Actor Card'
										src={IMG_CDN + actor.profile_path}
									/>
									<div className='bg-gray-700 rounded-lg rounded-t-none flex flex-col justify-center items-center'>
										<div className='text-2xl py-2'>
											{actor.name}
										</div>
										<div className='pb-2'>
											{actor.character
												? actor.character
												: "Actor"}
										</div>
									</div>
								</div>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default ActorList;
