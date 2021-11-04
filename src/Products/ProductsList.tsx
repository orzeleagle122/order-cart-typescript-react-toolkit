import React, {FC, useState} from 'react';

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
    const [products, setProducts] = useState<Product[]>(initialProducts);

    return (
        <>
            <div>
                <h2>Games List</h2>
                {products.map(item => <div key={item.id}><span>{item.title}: {item.price}</span></div>)}
            </div>
            <button onClick={() => setProducts(prevState => [...prevState, {
                title: 'Half Life',
                price: 33,
                id: 'hl'
            }])}>Add Product
            </button>
        </>
    );
};


export default ProductsList;