import { configureStore } from '@reduxjs/toolkit';

import homeSlice from './home/homeSlice';
import errorSlice from './error/errorSlice';
import detailsSlice from './details/detailsSlice';
import allSneakersSlice from './allSneakers/allSneakersSlice';

export const store = configureStore({
    reducer: {
        homeSlice,
        errorSlice,
        detailsSlice,
        allSneakersSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
