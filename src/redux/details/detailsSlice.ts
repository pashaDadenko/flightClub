import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { detailsSliceState } from './TypeDetailsSlice';
import { TypeApi } from '../../api/TypeApi';

export const detailsSlice = createSlice({
    name: 'details',

    initialState: <detailsSliceState>{
        DetailsSneakers: [],
        RecommendedSneakers: [],
        Brand: '',
    },

    reducers: {
        setDetailsSneakers(state, { payload }: PayloadAction<TypeApi[]>) {
            state.DetailsSneakers = payload;
            state.RecommendedSneakers = payload
                .filter((item) => item.brand === state.Brand)
                .slice(0, 9)
                .sort(() => 0.5 - Math.random());
        },
        setBrand(state, { payload }: PayloadAction<string>) {
            state.Brand = payload;
        },
    },
});

export const { setDetailsSneakers, setBrand } = detailsSlice.actions;

export default detailsSlice.reducer;
