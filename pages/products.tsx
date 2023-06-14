import Announcement from '@/Components/announcement/Announcement';
import Navbar from '@/Components/navbar/Navbar';
import Products from '@/Components/products/Products';
import styles from '../styles/productPage.module.scss';
import { ExpandMore } from '@mui/icons-material';
import { getProducts } from '@/functions/productFunction';
import { ProductType } from '@/types/productType';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
    const [productsData, setProductsData] = useState<ProductType[]>([])
    const [removeRepeated, setRemoveRepeated] = useState<ProductType[]>([])
    const [categories, setCategories] = useState<string[]>([])

    return (
        <>
            <Announcement />
            <Navbar />
            <div className={styles.productWhole}>
                <div className={styles.sliderProduct}>
                    {
                        removeRepeated.map((item) => (
                            <>
                            <span> {item.category} </span>
                            </>
                        ))
                    }
                </div>
                <div className={styles.productPage}>
                    <div className={styles.filter}>
                        <div className={styles.singleFilter}>
                            <span className={styles.filterSize}> Size </span>
                            <span> <ExpandMore className={styles.expandIcon} /> </span>
                        </div>
                        <div className={styles.singleFilter}></div>
                        <div className={styles.singleFilter}></div>
                        <div className={styles.singleFilter}></div>
                    </div>
                    <div>
                        <Products />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsPage;