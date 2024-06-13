import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';

export const store = configureStore({
    reducer: {
        productSlice,
    },
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});