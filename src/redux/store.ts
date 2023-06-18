import { configureStore } from '@reduxjs/toolkit';

import sneakersDataSlice from './sneakersData/sneakersDataSlice';

export const store = configureStore({
    reducer: {
        sneakersDataSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
