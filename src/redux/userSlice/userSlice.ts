import { TypeUserSlice } from './TypeUserSlice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'userSlice',

	initialState: <TypeUserSlice>{
		fullName: null,
		email: null,
		token: undefined,
		id: null,
	},

	reducers: {
		setUser(state, { payload }: PayloadAction<TypeUserSlice>) {
			state.fullName = payload.fullName;
			state.email = payload.email;
			state.token = payload.token;
			state.id = payload.id;
		},
		setRemoveUser(state) {
			state.email = null;
			state.token = undefined;
			state.id = null;
		},
	},
});

export const { setUser, setRemoveUser } = userSlice.actions;

export default userSlice.reducer;
