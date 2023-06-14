import Product from './productsComponent/Product';
import styles from './products.module.scss';
import { useEffect, useState } from 'react';
import { getProducts } from '@/functions/productFunction';
import { ProductType } from '@/types/productType';
import { useRouter } from 'next/router';

const Products = () => {
    const [productsData, setProductsData] = useState<ProductType[]>([])
    const path = useRouter().pathname;

    useEffect(() => {
        if(path === '/') {
            getProducts().then(data => setProductsData(data.slice(0,8)))
        }
        else {
            getProducts().then(data => setProductsData(data))
        }
    }, [])

    return (
        <div className={styles.products}>
            <div className={styles.productsWrapper}>
                {
                    productsData.map((item : ProductType, i : number) => (
                        <>
                            <Product key={i} products = {item} />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;
