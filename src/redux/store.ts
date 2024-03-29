import { sneakersApi } from './api/api';
import cartSlice from './cartSlice/cartSlice';
import userSlice from './userSlice/userSlice';
import storage from 'redux-persist/lib/storage';
import searchSlice from './searchSlice/searchSlice';
import filterSlice from './filterSlice/filterSlice';
import ordersSlice from './ordersSlice/ordersSlice';
import shippingSlice from './shippingSlice/shippingSlice';
import sneakersSlice from './sneakersSlice/sneakersSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['searchSlice', 'filterSlice'],
};

const rootReducer = combineReducers({
	[sneakersApi.reducerPath]: sneakersApi.reducer,
	sneakersSlice,
	cartSlice,
	userSlice,
	searchSlice,
	filterSlice,
	shippingSlice,
	ordersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(sneakersApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
