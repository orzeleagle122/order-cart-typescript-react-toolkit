import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import {addProduct, addProductAsync, getErrorMessage, Product} from "../redux/slices/products.slice";
import {useAppDispatch} from "../redux/hooks/store.hooks";
import {useDispatch, useSelector} from "react-redux";

const ProductForm: FC = () => {

    const dispatch = useAppDispatch()
    const errorMessage = useSelector(getErrorMessage);

    const initialStateFormProduct = {
        id: '',
        title: '',
        price: 0
    }

    const [product, setProduct] = useState<Product>(initialStateFormProduct)

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setProduct(prevState => {
        (prevState as any)[name] = value;
        const newValue = {...prevState};
        return newValue;
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addProductAsync(product));
        setProduct(initialStateFormProduct);
    }
    const {id, title, price} = product
    return (
        <>
            <h2>Add Game to the store</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Game title" name="title" value={title} onChange={handleChange}/>
                <input type="number" placeholder="Price" name="price" value={price} onChange={handleChange}/>
                <input type="text" placeholder="id" name="id" value={id} onChange={handleChange}/>
                <button type="submit">Add game to the store</button>
            </form>
            <strong>{errorMessage}</strong>
        </>
    );
};

export default ProductForm;