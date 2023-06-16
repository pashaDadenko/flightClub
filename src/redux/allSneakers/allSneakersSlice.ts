import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { allSneakersSliceState } from './TypeAllSneakersSlice';
import { TypeApi } from '../../api/TypeApi';

export const allSneakersSlice = createSlice({
    name: 'allSneakers',

    initialState: <allSneakersSliceState>{
        AllSneakers: [],
        CurrentSort: 'relevance',
    },

    reducers: {
        setAllSneakers(state, { payload }: PayloadAction<TypeApi[]>) {
            state.AllSneakers = payload;
        },

        setCurrentSort(state, { payload }: PayloadAction<string>) {
            state.CurrentSort = payload;
        },
    },
});

export const { setAllSneakers, setCurrentSort } = allSneakersSlice.actions;

export default allSneakersSlice.reducer;
