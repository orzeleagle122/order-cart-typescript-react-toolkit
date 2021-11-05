import React, {FC, useState} from 'react';
import {useSelector} from "react-redux";
import {getProductsSelector} from "../redux/slices/products.slice";

interface ProductsListProps {

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

interface Product {
    title: string;
    price: number;
    id: string;
}

const ProductsList: FC<ProductsListProps> = () => {
    const [productss, setProducts] = useState<Product[]>(initialProducts);

    const products = useSelector(getProductsSelector);

    return (
        <>
            <div>
                <h2>Games List</h2>
                {products.map(item => <div key={item.id}><span>{item.title}: {item.price}</span></div>)}
            </div>

        </>
    );
};


export default ProductsList;