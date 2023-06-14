import Announcement from '@/Components/announcement/Announcement';
import Navbar from '@/Components/navbar/Navbar';
import Products from '@/Components/products/Products';
import styles from '../styles/productPage.module.scss';
import { ExpandMore } from '@mui/icons-material';
import { getProducts, getProductsCategory } from '@/functions/productFunction';
import { ProductType } from '@/types/productType';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsPage = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [cat, setCat] = useState<string>('')

    useEffect(() => {
        getProductsCategory().then(data => setCategories(data))
    }, [])

    const handleCataegoryClick = (item : string) => {
        setCat(item)
    }

    return (
        <>
            <Announcement />
            <Navbar />
            <div className={styles.productWhole}>
                <div className={styles.sliderProduct}>
                    {
                        categories.map((item) => (
                            <>
                            <div className={styles.categoriesItem} onClick={()=> {handleCataegoryClick(item)}}> {item} </div>
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
                        <Products category = {cat}  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsPage;