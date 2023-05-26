import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeSlice/homeSlice';

export const store = configureStore({
    reducer: {
        homeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
