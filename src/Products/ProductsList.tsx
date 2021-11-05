import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {getProductsSelector, Product, removeProduct} from "../redux/slices/products.slice";
import {useAppDispatch} from "../redux/hooks/store.hooks";
import {addToCart} from "../redux/slices/cart.slices";


const ProductsList: FC = () => {

    const products = useSelector(getProductsSelector);
    const dispatch = useAppDispatch();

    const removeFromStore = (id: string) => dispatch(removeProduct(id));

    const handleAddToCart = (item: Product) => dispatch(addToCart(item));


    return (
        <>
            <div>
                <h2>Games List</h2>
                {products.map(item => <div key={item.id}><span>{item.title}: {item.price}</span>
                    <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    <button onClick={() => removeFromStore(item.id)}>Remove from the store</button>
                </div>)}
            </div>

        </>
    );
};


export default ProductsList;