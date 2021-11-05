import React from 'react';
import ProductsList from "./Products/ProductsList";
import ProductForm from "./Products/ProductForm";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Cart from "./Cart/Cart";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ProductsList/>
                <ProductForm/>
                <Cart/>
            </div>
        </Provider>

    );
}

export default App;
