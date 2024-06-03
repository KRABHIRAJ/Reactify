import { configureStore } from '@reduxjs/toolkit'
import swiggySlice from './slices/swiggySlice';

export const store = configureStore({
    reducer: swiggySlice
});