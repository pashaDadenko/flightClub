import { configureStore } from '@reduxjs/toolkit';

import sneakersDataSlice from './sneakersData/sneakersDataSlice';
import allSneakersSlice from './allSneakers/allSneakersSlice';

export const store = configureStore({
    reducer: {
        sneakersDataSlice,
        allSneakersSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
