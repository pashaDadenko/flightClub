import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypeCartSlice } from './TypeCartSlice.ts';
import { TypeApi } from '../../api/TypeApi';

export const cartSlice = createSlice({
	name: 'cartSlice',

	initialState: <TypeCartSlice>{
		cartItems: [],
		size: 0,
	},

	reducers: {
		setCartItems(state, { payload }: PayloadAction<TypeApi>) {
			state.cartItems.push({ ...payload, sizes: state.size });
		},
		setSize(state, { payload }: PayloadAction<number>) {
			state.size = payload;
		},
		deleteSneakers(state, { payload }: PayloadAction<number>) {
			state.cartItems = state.cartItems.filter((_, index) => index !== payload);
		},
		setClearCart(state) {
			state.cartItems = [];
		},
	},
});

export const { setCartItems, setSize, deleteSneakers, setClearCart } = cartSlice.actions;

export default cartSlice.reducer;
