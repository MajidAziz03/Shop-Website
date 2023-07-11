import Product from './productsComponent/Product';
import styles from './products.module.scss';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { getProducts } from '@/functions/productFunction';

const Products = ({paginatedProducts, pageClicked, pageCount,fromHome, rendering} : any) => {
    const route = useRouter();
    const [data, setData] = useState<any>([]);
    console.log("home _____________>>>>>>>>>>>>>>>", fromHome)

    useEffect(() => {
        getProducts().then(data => setData(data.slice(0, 8)))
    })

    return (
        <>
            <div className={styles.products}>
                {fromHome
                ?
                <div className={styles.productsWrapper}>
                    {data.map((item: any, i: number) => (
                        <>
                            <Product key={i} products={item} />
                        </>
                    ))}
                    </div>
                    :
                    <div className={styles.productsWrapper}>
                    {
                        paginatedProducts.length > 0 &&
                        paginatedProducts.map((item: any, i: number) => (
                            <>
                                <Product key={i} products={item} />
                            </>
                        ))
                    }
                </div>
                }
            </div>
            {
                !fromHome
                &&
                <ReactPaginate
                    pageRangeDisplayed={5}
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={pageClicked}
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
