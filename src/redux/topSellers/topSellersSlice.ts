import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { topSellersState } from './TypeTopSellersSlice';
import { TypeApi } from '../../api/TypeApi';

export const topSellersSlice = createSlice({
    name: 'topSellers',

    initialState: <topSellersState>{
        topSellersData: [],
    },

    reducers: {
        setTopSellersData(state, { payload }: PayloadAction<TypeApi[]>) {
            state.topSellersData = payload
                .sort((a, b) => a.rating - b.rating)
                .reverse()
                .slice(0, 22);
        },
    },
});

export const { setTopSellersData } = topSellersSlice.actions;

export default topSellersSlice.reducer;
