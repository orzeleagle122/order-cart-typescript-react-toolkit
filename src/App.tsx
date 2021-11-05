import React from 'react';
import ProductsList from "./Products/ProductsList";
import ProductForm from "./Products/ProductForm";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ProductsList/>
                <ProductForm/>
            </div>
        </Provider>

    );
}

export default App;
