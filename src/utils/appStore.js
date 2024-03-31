import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import actorsReducer from "./actorSlice";

const appStore = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
		gpt: gptReducer,
		config: configReducer,
		actor: actorsReducer,
	},
});

export default appStore;
