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

		filterValues: {
			valueBrand: [],
			valueModel: [],
			valueColor: [],
		},
	},

	reducers: {
		setSneakersData(state, { payload }: PayloadAction<TypeApi[]>) {
			state.sneakersData = payload;
			state.topSellersData = payload.sort((a, b) => b.rating - a.rating).slice(0, 8);
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
			if (state.filterValues.valueBrand.includes(payload)) {
				let filters = state.filterValues.valueBrand.filter((el) => el !== payload);
				state.filterValues.valueBrand = filters;
			} else {
				state.filterValues.valueBrand = [...state.filterValues.valueBrand, payload];
			}
		},
		setValueModel(state, { payload }: PayloadAction<string>) {
			if (state.filterValues.valueModel.includes(payload)) {
				let filters = state.filterValues.valueModel.filter((el) => el !== payload);
				state.filterValues.valueModel = filters;
			} else {
				state.filterValues.valueModel = [...state.filterValues.valueModel, payload];
			}
		},
		setValueColor(state, { payload }: PayloadAction<string>) {
			if (state.filterValues.valueColor.includes(payload)) {
				let filters = state.filterValues.valueColor.filter((el) => el !== payload);
				state.filterValues.valueColor = filters;
			} else {
				state.filterValues.valueColor = [...state.filterValues.valueColor, payload];
			}
		},
		setClearFilter(state) {
			state.filterValues.valueBrand = [];
			state.filterValues.valueModel = [];
			state.filterValues.valueColor = [];
		},
	},
});

export const { setSneakersData, setBrand, setImageCarousel, setCurrentSort, setValueBrand, setValueModel, setValueColor, setClearFilter } =
	sneakersDataSlice.actions;

export default sneakersDataSlice.reducer;
