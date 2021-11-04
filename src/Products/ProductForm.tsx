import React from 'react';

interface ProductFormProps {

}

const ProductForm = () => {
    return (
        <>
            <h2>Add Game to the store</h2>
            <form>
                <input type="text" placeholder="Game title" name="title"/>
                <input type="number" placeholder="Price" name="price"/>
                <input type="text" placeholder="id" name="id"/>
                <button type="submit">Add game to the store</button>
            </form>
        </>
    );
};

export default ProductForm;