import { TypeApi } from '../../api/TypeApi.ts';
import { TypeSneakersSlice } from './TypeSneakersSlice.ts';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const sneakersSlice = createSlice({
	name: 'sneakersSlice',

	initialState: <TypeSneakersSlice>{
		allSneakers: [],

		ImageCarousel: [],
		brand: '',
		title: '',

		currentSort: 'relevance',
	},

	reducers: {
		setSneakersData(state, { payload }: PayloadAction<TypeApi[]>) {
			state.allSneakers = payload;
		},
		setBrand(state, { payload }: PayloadAction<string>) {
			state.brand = payload;
		},
		setImageCarousel(state, { payload }: PayloadAction<string[]>) {
			state.ImageCarousel = payload;
		},
		setTitle(state, { payload }: PayloadAction<string>) {
			state.title = payload;
		},

		setCurrentSort(state, { payload }: PayloadAction<string>) {
			state.currentSort = payload;
		},
	},
});

export const { setSneakersData, setBrand, setImageCarousel, setTitle, setCurrentSort } = sneakersSlice.actions;

export default sneakersSlice.reducer;
