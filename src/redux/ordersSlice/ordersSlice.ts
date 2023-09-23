import { TypeOrdersSlice } from './TypeOrdersSlice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
	name: 'ordersSlice',

	initialState: <TypeOrdersSlice>{
		userId: '',
		numberOrder: 0,
		orderTotalPrice: 0,
		sneakers: [],
	},

	reducers: {
		setOrders(state, { payload }: PayloadAction<TypeOrdersSlice>) {
			state.userId = payload.userId;
			state.numberOrder = payload.numberOrder;
			state.orderTotalPrice = payload.orderTotalPrice;
			state.sneakers = payload.sneakers;
		},
	},
});

export const { setOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
