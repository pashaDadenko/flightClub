import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TypeSneakersDataSlice } from './TypeSneakersDataSlice.ts';
import { TypeApi } from '../../api/TypeApi';

export const sneakersDataSlice = createSlice({
    name: 'sneakersData',

    initialState: <TypeSneakersDataSlice>{
        sneakersData: [],
        topSellersData: [],
        offWhiteData: [],
        airJordanData: [],
        randomSneakers: [],
    },

    reducers: {
        setSneakersData(state, { payload }: PayloadAction<TypeApi[]>) {
            state.sneakersData = payload;

            state.topSellersData = payload
                .sort((a, b) => a.rating - b.rating)
                .reverse()
                .slice(0, 8);

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
    },
});

export const { setSneakersData } = sneakersDataSlice.actions;

export default sneakersDataSlice.reducer;
