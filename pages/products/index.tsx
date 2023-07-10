import Announcement from '@/Components/announcement/Announcement';
import Navbar from '@/Components/navbar/Navbar';
import Products from '@/Components/products/Products';
import styles from '../../styles/productPage.module.scss';
import { getProductsCategory } from '@/functions/productFunction';
import React, { useEffect, useState } from 'react';
import ProductFilter from '@/Components/products/productsfilter/ProductFilter';
import BaseLayout from '@/Components/BaseLayout';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductsPage = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [cat, setCat] = useState<string>('')
    const [brands, setBrands] = useState<Array<string>>([])
    const [price, setPrice] = useState<string>("")
    const isTablet = useMediaQuery('(max-width:768px)');


    useEffect(() => {
        getProductsCategory().then(data => setCategories(data))
    }, [])

    const handleCataegoryClick = (item: string, type: string) => {
        if (item !== '' && type !== 'view') {
            setCat(item)
        }
        if (type === 'view') {
            setCat("view")
        }
    }

    const handleFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        const value = e.target.value;
        if (checked && brands.indexOf(value == -1)) {
            setBrands([...brands, value])
        }
        else {
            setBrands(brands.filter(item => item !== value))
        }
    }

    const handlePriceFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setPrice(e.target.value)
        }
    }

    return (
        <BaseLayout>
        {!isTablet
        ?
            <div className={styles.productWhole}>
                <div className={styles.sliderProduct}>
                    <div className={styles.categoriesItem} onClick={() => handleCataegoryClick("view")}> View All </div>
                    {
                        categories.map((item) => (
                            <>
                                <div className={styles.categoriesItem} onClick={() => { handleCataegoryClick(item) }}> {item} </div>
                            </>
                        ))
                    }
                </div>
                <div className={styles.productPage}>
                    <div style={{ paddingLeft: "78px" }}>
                        <ProductFilter filters={handleFilters} brandsFilter={brands} priceFilter = {price} priceFilters={handlePriceFilters} price={price} />
                    </div>
                    <div> <Products category={cat} brandsFilter={brands} priceFilters={price} /> </div>
                </div>
            </div>
            :
            <div className={styles.products_mobile}> 
                <Products category={cat} brandsFilter={brands} priceFilters={price} /> 
            </div>
            }
        </BaseLayout>
    )
}

export default ProductsPage;