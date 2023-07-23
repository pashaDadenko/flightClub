import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypeSneakersDataSlice } from './TypeSneakersDataSlice.ts';
import { TypeApi } from '../../api/TypeApi';

export const sneakersDataSlice = createSlice({
	name: 'sneakersData',

	initialState: <TypeSneakersDataSlice>{
		sneakersData: [],
		offWhiteData: [],
		airJordanData: [],
		randomSneakers: [],
		topSellersData: [],

		recommendedSneakers: [],
		ImageCarousel: [],
		brand: '',

		currentSort: 'relevance',

		valueBrand: [],
		valueModel: [],
		valueColor: [],
	},

	reducers: {
		setSneakersData(state, { payload }: PayloadAction<TypeApi[]>) {
			state.sneakersData = payload;
			state.topSellersData = payload
				.sort((a, b) => a.rating - b.rating)
				.reverse()
				.slice(0, 8);
			state.recommendedSneakers = payload
				.filter((item) => item.brand === state.brand)
				.slice(0, 9)
				.sort(() => 0.5 - Math.random());
			state.offWhiteData = payload
				.filter((item) => item.brand === 'Off-white')
				.sort(() => 0.5 - Math.random())
				.slice(0, 8);
			state.airJordanData = payload
				.filter((item) => item.brand === 'Air jordan')
				.sort(() => 0.5 - Math.random())
				.slice(0, 8);
			state.randomSneakers = payload.sort(() => 0.5 - Math.random()).slice(0, 8);
		},
		setBrand(state, { payload }: PayloadAction<string>) {
			state.brand = payload;
		},
		setImageCarousel(state, { payload }: PayloadAction<string[]>) {
			state.ImageCarousel = payload;
		},
		setCurrentSort(state, { payload }: PayloadAction<string>) {
			state.currentSort = payload;
			if (payload === 'low') state.sneakersData = state.sneakersData.sort((a, b) => a.price - b.price);
			else if (payload === 'high') state.sneakersData = state.sneakersData.sort((a, b) => b.price - a.price);
			else if (payload === 'relevance') state.sneakersData = state.sneakersData.sort(() => 0.5 - Math.random());
		},
		setValueBrand(state, { payload }: PayloadAction<string>) {
			if (state.valueBrand.includes(payload)) {
				let filters = state.valueBrand.filter((el) => el !== payload);
				state.valueBrand = filters;
			} else {
				state.valueBrand = [...state.valueBrand, payload];
			}
		},
		setValueModel(state, { payload }: PayloadAction<string>) {
			if (state.valueModel.includes(payload)) {
				let filters = state.valueModel.filter((el) => el !== payload);
				state.valueModel = filters;
			} else {
				state.valueModel = [...state.valueModel, payload];
			}
		},
		setValueColor(state, { payload }: PayloadAction<string>) {
			if (state.valueColor.includes(payload)) {
				let filters = state.valueColor.filter((el) => el !== payload);
				state.valueColor = filters;
			} else {
				state.valueColor = [...state.valueColor, payload];
			}
		},
	},
});

export const { setSneakersData, setBrand, setImageCarousel, setCurrentSort, setValueBrand, setValueModel, setValueColor } = sneakersDataSlice.actions;

export default sneakersDataSlice.reducer;
