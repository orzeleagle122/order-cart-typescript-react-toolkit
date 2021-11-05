import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/hooks/store.hooks";
import {getCartProducts, getTotalPrice, removeFromCart} from "../redux/slices/cart.slices";

const Cart: FC = () => {

    const cartProducts = useAppSelector(getCartProducts);
    const totalPrice = useAppSelector(getTotalPrice);
    const dispatch = useAppDispatch();

    const handleRemoveFromCart = (id: string) => {
        dispatch(removeFromCart(id));
    }

    return (
        <>
            <h2>Cart</h2>
            <h5>{totalPrice}</h5>
            {cartProducts.map(item => (
                <div key={item.id}>
                    <span>{item.title} </span>
                    <span>{item.amount} </span>
                    <button onClick={() => handleRemoveFromCart(item.id)}> Remove from cart</button>
                </div>
            ))}
        </>
    );
};

export default Cart;