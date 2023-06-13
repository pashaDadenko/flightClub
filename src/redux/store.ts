import { configureStore } from '@reduxjs/toolkit';

import homeSlice from './home/homeSlice';
import errorSlice from './error/errorSlice';
import detailsSlice from './details/detailsSlice';

export const store = configureStore({
    reducer: {
        homeSlice,
        errorSlice,
        detailsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
