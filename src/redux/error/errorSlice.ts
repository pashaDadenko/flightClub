import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { errorSliceState } from './TypeErrorSlice';
import { TypeApi } from '../../api/TypeApi';

export const errorSlice = createSlice({
    name: 'error',

    initialState: <errorSliceState>{
        randomSneakers: [],
    },

    reducers: {
        setRandomSneakers(state, { payload }: PayloadAction<TypeApi[]>) {
            state.randomSneakers = payload.sort(() => 0.5 - Math.random()).slice(0, 8);
        },
    },
});

export const { setRandomSneakers } = errorSlice.actions;

export default errorSlice.reducer;
