import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypeSneakersDataSlice } from './TypeSneakersDataSlice.ts';
import { TypeApi } from '../../api/TypeApi';

export const sneakersDataSlice = createSlice({
	name: 'sneakersData',

	initialState: <TypeSneakersDataSlice>{
		allSneakers: [],
		offWhiteSneakers: [],
		airJordanSneakers: [],
		randomSneakers: [],
		topSellersSneakers: [],

		recommendedSneakers: [],
		ImageCarousel: [],
		brand: '',

		currentSort: 'relevance',
	},

	reducers: {
		setSneakersData(state, { payload }: PayloadAction<TypeApi[]>) {
			state.allSneakers = payload;
			state.offWhiteSneakers = payload.filter((item) => item.brand === 'Off-white').slice(0, 8);
			state.airJordanSneakers = payload.filter((item) => item.brand === 'Air jordan').slice(0, 8);
			state.randomSneakers = payload.sort(() => 0.5 - Math.random()).slice(0, 8);
			state.topSellersSneakers = payload.sort((a, b) => b.rating - a.rating).slice(0, 8);
			state.recommendedSneakers = payload.filter((item) => item.brand === state.brand).slice(0, 8);
		},
		setBrand(state, { payload }: PayloadAction<string>) {
			state.brand = payload;
		},
		setImageCarousel(state, { payload }: PayloadAction<string[]>) {
			state.ImageCarousel = payload;
		},
		setCurrentSort(state, { payload }: PayloadAction<string>) {
			state.currentSort = payload;
			if (payload === 'low') state.allSneakers = state.allSneakers.sort((a, b) => a.price - b.price);
			else if (payload === 'high') state.allSneakers = state.allSneakers.sort((a, b) => b.price - a.price);
			else if (payload === 'relevance') state.allSneakers = state.allSneakers.sort(() => 0.5 - Math.random());
		},
	},
});

export const { setSneakersData, setBrand, setImageCarousel, setCurrentSort } = sneakersDataSlice.actions;

export default sneakersDataSlice.reducer;
