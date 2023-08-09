import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypeSearchSlice } from './TypeSearchSlice.ts';

export const searchSlice = createSlice({
	name: 'searchSlice',

	initialState: <TypeSearchSlice>{
		searchValue: '',
	},

	reducers: {
		setSearchValue(state, { payload }: PayloadAction<string>) {
			state.searchValue = payload;
		},
	},
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
