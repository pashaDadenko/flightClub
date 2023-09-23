import { TypeFilterSlice } from './TypeFilterSlice.ts';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const updateFilters = <T>(state: T[], payload: T): T[] => {
	if (state.includes(payload)) {
		return state.filter((el) => el !== payload);
	} else {
		return [...state, payload];
	}
};

export const filterSlice = createSlice({
	name: 'filterSlice',

	initialState: <TypeFilterSlice>{
		filterValues: {
			valueBrand: [],
			valueModel: [],
			valueSizes: [],
			valueColor: [],
		},
	},

	reducers: {
		setValueBrand(state, { payload }: PayloadAction<string>) {
			state.filterValues.valueBrand = updateFilters(state.filterValues.valueBrand, payload);
		},
		setValueModel(state, { payload }: PayloadAction<string>) {
			state.filterValues.valueModel = updateFilters(state.filterValues.valueModel, payload);
		},
		setValueSizes(state, { payload }: PayloadAction<number>) {
			state.filterValues.valueSizes = updateFilters(state.filterValues.valueSizes, payload);
		},
		setValueColor(state, { payload }: PayloadAction<string>) {
			state.filterValues.valueColor = updateFilters(state.filterValues.valueColor, payload);
		},
		setClearFilter(state) {
			state.filterValues.valueBrand = [];
			state.filterValues.valueModel = [];
			state.filterValues.valueSizes = [];
			state.filterValues.valueColor = [];
		},
	},
});

export const { setValueBrand, setValueModel, setValueSizes, setValueColor, setClearFilter } = filterSlice.actions;

export default filterSlice.reducer;
