import {Product} from "./products.slice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface CartSlices extends Product {
    amount: number
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartSlices[],
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const productIndex = state.findIndex(item => item.id === action.payload.id)
            if (productIndex !== -1) {
                state[productIndex].amount += 1;
            } else {
                state.push({...action.payload, amount: 1})
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const productIndex = state.findIndex(product => product.id === action.payload);
            if (state[productIndex].amount > 1) {
                state[productIndex].amount -= 1
            } else {
                return state.filter(item => item.id !== action.payload);
            }
        }
    }
})

export default cartSlice.reducer;

export const {addToCart, removeFromCart} = cartSlice.actions;

export const getCartProducts = (state: RootState) => state.cart;

export const getTotalPrice = (state: RootState) => state.cart.reduce((acc, next) => acc += (next.amount * next.price), 0);

