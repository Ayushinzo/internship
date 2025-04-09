import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/slice.js'

export const store = configureStore({
    reducer: authSlice
})