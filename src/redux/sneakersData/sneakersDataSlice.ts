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

        recommendedSneakers: [],
        brand: '',
        ImageCarousel: [],
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
            state.recommendedSneakers = payload
                .filter((item) => item.brand === state.brand)
                .slice(0, 9)
                .sort(() => 0.5 - Math.random());
            state.randomSneakers = payload.sort(() => 0.5 - Math.random()).slice(0, 8);
        },
        setBrand(state, { payload }: PayloadAction<string>) {
            state.brand = payload;
        },
        setImageCarousel(state, { payload }: PayloadAction<string[]>) {
            state.ImageCarousel = payload;
        },
    },
});

export const { setSneakersData, setBrand, setImageCarousel } = sneakersDataSlice.actions;

export default sneakersDataSlice.reducer;
