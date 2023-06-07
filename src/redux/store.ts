import { configureStore } from '@reduxjs/toolkit';

import homeSlice from './home/homeSlice';
import errorSlice from './error/errorSlice';
import topSellersSlice from './topSellers/topSellersSlice';

export const store = configureStore({
    reducer: {
        homeSlice,
        errorSlice,
        topSellersSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
