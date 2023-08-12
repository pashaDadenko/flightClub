import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartSlice from './cartSlice/cartSlice';
import userSlice from './userSlice/userSlice';
import searchSlice from './searchSlice/searchSlice';
import filterSlice from './filterSlice/filterSlice';
import sneakersSlice from './sneakersSlice/sneakersSlice';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['searchSlice', 'filterSlice'],
};

const rootReducer = combineReducers({
	sneakersSlice,
	cartSlice,
	userSlice,
	searchSlice,
	filterSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
