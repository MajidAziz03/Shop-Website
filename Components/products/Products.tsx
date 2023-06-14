import Product from './productsComponent/Product';
import styles from './products.module.scss';
import { useEffect, useState } from 'react';
import { getProducts } from '@/functions/productFunction';
import { ProductType } from '@/types/productType';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

const Products = () => {
    const [productsData, setProductsData] = useState<ProductType[]>([])
    const path = useRouter().pathname;
    const itemsPerPage = 12;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const paginatedProducts = productsData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productsData.length / itemsPerPage);

    useEffect(() => {
        if (path === '/') {
            getProducts().then(data => setProductsData(data.slice(0, 8)))
        }
        else {
            getProducts().then(data => setProductsData(data))
        }
    }, [])

    const handlePageClick = (event : any) => {
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
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className={styles.pagination}
                activeLinkClassName = {styles.activeLink}
                nextLinkClassName = {styles.nextLink}
                previousLinkClassName={styles.prevLink}
                pageLinkClassName = {styles.pageLink}
            />
        </>
    )
}

export default Products;
