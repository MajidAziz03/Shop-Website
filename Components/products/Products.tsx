import React from 'react'
import styles from './products.module.scss';
import Product from './productsComponent/Product';

const Products = () => {
    return (
        <div className={styles.products}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default Products;