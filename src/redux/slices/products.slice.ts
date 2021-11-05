import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface Product {
    title: string;
    price: number;
    id: string;
}

const initialProducts = [
    {
        title: 'Escape From Tarcov',
        price: 60,
        id: 'eft'
    },
    {
        title: 'Hunt: Shadow',
        price: 70,
        id: 'hunt'
    },
    {
        title: 'Hell let Loose',
        price: 55,
        id: 'hll'
    },
]

const productsSlice = createSlice({
        name: 'products',
        initialState: initialProducts,
        reducers: {
            addProduct: (state, action: PayloadAction<Product>) => {
                return [action.payload, ...state];
            }
        }
    }
)

export const {addProduct} = productsSlice.actions

export const getProductsSelector = (state: RootState) => state.products;

export default productsSlice.reducer;

