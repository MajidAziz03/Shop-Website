import Product from './productsComponent/Product';
import styles from './products.module.scss';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

const Products = ({paginatedProducts, pageClicked, pageCount} : any) => {
    const route = useRouter();
    return (
        <>
            <div className={styles.products}>
                <div className={styles.productsWrapper}>
                    {
                        paginatedProducts.length > 0 && paginatedProducts.map((item: any, i: number) => (
                            <>
                                <Product key={i} products={item} />
                            </>
                        ))
                    }
                </div>
            </div>
            {
                route.pathname !== "/"
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
