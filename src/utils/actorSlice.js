import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const actorSlice = createSlice({
	name: "actor",
	initialState: {
		actorsList: null,
	},
	reducers: {
		addActorsList: (state, action) => {
			state.actorsList = action.payload;
		},
	},
});

export const { addActorsList } = actorSlice.actions;
export default actorSlice.reducer;
