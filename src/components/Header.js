import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
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
		<div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
			<img className='w-48' src={LOGO} alt='logo' />
			{user && (
				<div className='flex p-2'>
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
