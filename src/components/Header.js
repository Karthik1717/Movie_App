import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

	const handleGptSearchClick = () => {
		dispatch(toggleGptSearchView());
	};

	const handleLanguageChange = (evt) => {
		dispatch(changeLanguage(evt.target.value));
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});
		return () => unsubscribe();
	}, []);
	return (
		<div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
			<img className='w-48' src={LOGO} alt='logo' />
			{user && (
				<div className='flex p-2'>
					{showGptSearch && (
						<select
							className='p-2 bg-gray-900 text-white m-2'
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option
									key={lang.identifier}
									value={lang.identifier}
								>
									{lang.name}
								</option>
							))}
						</select>
					)}
					<button
						className='py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-lg'
						onClick={handleGptSearchClick}
					>
						{showGptSearch ? "Home" : "Gpt Search"}
					</button>
					<img
						className='w-12 h-12'
						src={user?.photoURL || USER_AVATAR}
						alt='usericon'
					/>

					<button
						className='font-bold text-white'
						onClick={handleSignOut}
					>
						(Sign Out)
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
