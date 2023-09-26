import { TypeOrderData, TypeOrdersSlice } from './TypeOrdersSlice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
	name: 'ordersSlice',

	initialState: <TypeOrdersSlice>{
		ordersData: [],
	},

	reducers: {
		setOrders(state, { payload }: PayloadAction<TypeOrderData[]>) {
			state.ordersData = payload;
		},
		addOrder: (state, { payload }: PayloadAction<TypeOrderData>) => {
			state.ordersData.push(payload);
		},
	},
});

export const { setOrders, addOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
