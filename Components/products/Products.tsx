import Product from './productsComponent/Product';
import styles from './products.module.scss';

const Products = () => {
    return (
        <div className={styles.products}>
            <div className={styles.productsWrapper}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Products;