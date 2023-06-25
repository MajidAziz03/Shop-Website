import Product from './productsComponent/Product';
import styles from './products.module.scss';
import React, { useEffect, useState } from 'react';
import { getProducts, instance, } from '@/functions/productFunction';
import { ProductType, brand_filters } from '@/types/productType';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

interface Props {
    category: string;
    fromHome: boolean;
    brandsFilter : string[];
    priceFilters : string;
}

const Products = ({ category, fromHome, brandsFilter, priceFilters }: Props) => {
    const [productsData, setProductsData] = useState<ProductType[]>([])
    const [renderData, setRenderData] = useState<ProductType[]>([])
    const path = useRouter().pathname;
    const itemsPerPage = 12;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const paginatedProducts = productsData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productsData.length / itemsPerPage);

    useEffect(() => {
        if (fromHome) {
            getProducts().then(data => setProductsData(data.slice(0, 8)))
        }
        else {
            getProducts().then(data => setProductsData(data))
            getProducts().then(data => setRenderData(data))
        }
    }, [])

    const categoryFilter = () => {
        let results;
        results = renderData;
        if (category && category !== 'view') {
            results = results.filter(item => item.category.includes(category))
        }
        if(brandsFilter && brandsFilter.length > 0) {
            results = results.filter(item => brandsFilter.includes(item.brand))
        }
        if (category && category === 'view') {
            results = renderData;
        }
        if(priceFilters) {
            if(priceFilters == "Low to High") {
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
        setProductsData(results)
    }

    useEffect(() => {
        categoryFilter()
    }, [category, brandsFilter, priceFilters])

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % productsData.length;
        setItemOffset(newOffset);
    };

    

    return (
        <>
            <div className={styles.products}>
                <div className={styles.productsWrapper}>
                    {
                        paginatedProducts.map((item: ProductType, i: number) => (
                            <>
                                <Product key={i} products={item} />
                            </>
                        ))
                    }
                </div>
            </div>
            {
                !fromHome
                &&
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className={styles.pagination}
                    activeLinkClassName={styles.activeLink}
                    nextLinkClassName={styles.nextLink}
                    previousLinkClassName={styles.prevLink}
                    pageLinkClassName={styles.pageLink}
                />
            }
        </>
    )
}

export default Products;
