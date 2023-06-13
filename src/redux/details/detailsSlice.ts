import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { detailsSliceState } from './TypeDetailsSlice';
import { TypeApi } from '../../api/TypeApi';

export const detailsSlice = createSlice({
    name: 'details',

    initialState: <detailsSliceState>{
        DetailsSneakers: [],
    },

    reducers: {
        setDetailsSneakers(state, { payload }: PayloadAction<TypeApi[]>) {
            state.DetailsSneakers = payload;
        },
    },
});

export const { setDetailsSneakers } = detailsSlice.actions;

export default detailsSlice.reducer;
