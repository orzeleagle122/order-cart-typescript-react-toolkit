import {configureStore} from '@reduxjs/toolkit';
import products from './slices/products.slice';
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        products
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;