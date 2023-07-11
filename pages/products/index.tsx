import Announcement from '@/Components/announcement/Announcement';
import Navbar from '@/Components/navbar/Navbar';
import Products from '@/Components/products/Products';
import styles from '../../styles/productPage.module.scss';
import { getProducts, getProductsCategory } from '@/functions/productFunction';
import React, { useEffect, useState } from 'react';
import ProductFilter from '@/Components/products/productsfilter/ProductFilter';
import BaseLayout from '@/Components/BaseLayout';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';

const ProductsPage = ({products, render, categories} : any) => {
    const [productsData, setProductsData] = useState<any[]>([])
    const [renderData, setRenderData] = useState<any[]>([])
    const [cat, setCat] = useState<string>('')
    const [brands, setBrands] = useState<Array<string>>([])
    const [price, setPrice] = useState<string>("")
    const [itemOffset, setItemOffset] = useState(0);
    
    // pagination
    const route = useRouter()
    const itemsPerPage = 12;
    const endOffset = itemOffset + itemsPerPage;
    const paginatedProducts = renderData.length > 0 && renderData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(renderData.length / itemsPerPage);

    useEffect(() => {
        if(route.pathname === "/") {
            setProductsData(products.slice(0,8))
        }
        else {
            setProductsData(products)
            setRenderData(products)
        }
    }, [])

    useEffect(() => {
        categoryFilter()
    }, [cat, brands, price])

    const handleCataegoryClick = (item: string, type: string) => {
        if (item !== '' && type !== 'view') {
            setCat(item)
        }
        else if (type === 'view') {
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

    const categoryFilter = () => {
        let results;
        results = products;
        if (cat && cat !== 'view') {
            results = results.filter(item => item.category.includes(cat))
        }
        if(brands && brands.length > 0) {
            results = results.filter(item => brands.includes(item.brand))
        }
        if (cat && cat === 'view') {
            results = products;
            if(brands.length > 0) {
                results = results.filter(item => brands.includes(item.brand))
            }
        }
        if(price) {
            if(price == "Low to High") {
                let price = results.filter(item => item.price)
                let sorting = price.sort((a,b) => {
                    return a.price - b.price;
                })
                results = sorting;
            }
            else {
                let price = results.filter(item => item.price)
                let sorting = price.sort((a,b) => {
                    return b.price - a.price;
                })
                results = sorting;
            }
        }
        setRenderData(results)
    }

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % productsData.length;
        setItemOffset(newOffset);
    };

    return (
        <BaseLayout>
            <div className={styles.productWhole}>
                <div className={styles.sliderProduct}>
                    <div className={styles.categoriesItem} onClick={() => handleCataegoryClick("view")}> View All </div>
                    {
                        categories.map((item : any) => (
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
                    <div> <Products paginatedProducts = {paginatedProducts} pageClicked = {handlePageClick} pageCount = {pageCount} category={cat} brandsFilter={brands} priceFilters={price} /> </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export const getServerSideProps = async () => {
    const data =  await getProducts()
    const categories = await getProductsCategory()
    return {
        props : {
            products : data,
            render : data,
            categories : categories
        }
    }
}


export default ProductsPage;