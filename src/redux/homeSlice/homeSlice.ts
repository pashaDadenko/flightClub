import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HomeSliceState, TypeAllData } from './typeHomeSlice';

export const homeSlice = createSlice({
    name: 'home',

    initialState: <HomeSliceState>{
        sneakersData: [],
        topSellersData: [],
        offWhiteData: [],
        airJordanData: [],
    },

    reducers: {
        setSneakersData(state, { payload }: PayloadAction<TypeAllData[]>) {
            state.sneakersData = payload;
            state.topSellersData = payload
                .sort((a, b) => a.rating - b.rating)
                .reverse()
                .slice(0, 8);
            state.offWhiteData = payload.filter((item) => item.brand === 'Off-white').slice(0, 8);
            state.airJordanData = payload.filter((item) => item.brand === 'Air jordan').slice(0, 8);
        },
    },
});

export const { setSneakersData } = homeSlice.actions;

export default homeSlice.reducer;
