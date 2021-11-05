import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import validateProducts from "../../fakeAPI";

export interface Product {
    title: string;
    price: number;
    id: string;
}

export enum ValidationState {
    Fulfilled,
    Pending,
    Rejected
}

interface ProductSlideState {
    products: Product[],
    validationState?: ValidationState,
    errorMessage?: string
}

const initialProducts: Product[] = [
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

const initialState: ProductSlideState = {
    products: initialProducts,
    validationState: undefined,
    errorMessage: undefined
}

export const addProductAsync = createAsyncThunk('products/addNewProduct', async (initialProducts: Product) => {
    const product = await validateProducts(initialProducts);
    return product;
})

const productsSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {
            addProduct: (state, action: PayloadAction<Product>) => {
                state.products.push(action.payload)
            },
            removeProduct: (state, action: PayloadAction<string>) => ({
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            })
        },
        extraReducers: builder => {
            builder.addCase(addProductAsync.fulfilled, (state, action) => ({
                ...state,
                validationState: ValidationState.Fulfilled,
                errorMessage: undefined,
                products: [...state.products, action.payload]
            }))
            builder.addCase(addProductAsync.rejected, (state, action) => ({
                ...state,
                validationState: ValidationState.Rejected,
                errorMessage: action.error.message
            }))
            builder.addCase(addProductAsync.pending, (state, action) => ({
                ...state,
                validationState: ValidationState.Pending,
                errorMessage: undefined
            }))
        }
    }
)

export const {addProduct, removeProduct} = productsSlice.actions

export const getProductsSelector = (state: RootState) => state.products.products;
export const getErrorMessage=(state:RootState)=>state.products.errorMessage;

export default productsSlice.reducer;

