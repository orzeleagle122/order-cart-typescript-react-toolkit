import {Product} from "./redux/slices/products.slice";

const validateProducts = (product: Product): Promise<Product> => new Promise((res, rej) => setTimeout(() => {
    if (product.title.length === 0) {
        rej('No title')
    }
    if (product.price <= 0) {
        rej('Price is incorrect')
    }
    res(product);
}, 500))

export default validateProducts;