import { products } from '../resource-collection/products.js';

export const index = (req, res, next) => {
    return res.status(200).send(products).end();
}

export const findById = (req, res, next) => {
    const productId = req.params.id;
    const product = products.find((product) => product.id == productId);
    // const product = products.find((product) => product.id === Number(productId)); // strict comparison

    if (! product) {
        return res.status(404).send({message: `Product with an id ${productId} was not found.`}).end();
    }

    return res.status(200).send(product).end();
}

export * as productController from './productController.js';