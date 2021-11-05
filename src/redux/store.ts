import {configureStore} from '@reduxjs/toolkit';
import products from './slices/products.slice';
import cart from './slices/cart.slices';
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        products,
        cart
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;