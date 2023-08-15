import { TypeShippingSlice } from './TypeShippingSlice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const shippingSlice = createSlice({
	name: 'shippingSlice',

	initialState: <TypeShippingSlice>{
		name: null,
		streetAddress: null,
		apartment: null,
		city: null,
		postalCode: null,
		telephone: null,

		standardShipping: 40,
	},

	reducers: {
		setShipping(state, { payload }: PayloadAction<TypeShippingSlice>) {
			state.name = payload.name;
			state.streetAddress = payload.streetAddress;
			state.apartment = payload.apartment;
			state.city = payload.city;
			state.postalCode = payload.postalCode;
			state.telephone = payload.telephone;
		},
		setEdit(state) {
			state.name = null;
			state.streetAddress = null;
			state.apartment = null;
			state.city = null;
			state.postalCode = null;
			state.telephone = null;
		},
	},
});

export const { setShipping, setEdit } = shippingSlice.actions;

export default shippingSlice.reducer;
