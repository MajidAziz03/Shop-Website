import { useRouter } from 'next/router';
import styles from '../../styles/single_product.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BaseLayout from '@/Components/BaseLayout';
import FsLightbox from "fslightbox-react";

const SingleProductPage = ({singleProduct} : any) => {
    const [toggler, setToggler] = useState(false);

    return (
        <BaseLayout>
            <div className={styles.singleProduct}>
                <div className={styles.left}>
                    <div className={styles.leftWrapper}>
                        <div className={styles.img_wrapper}>
                            {singleProduct.images.slice(0,3).map((item: any) => {
                                return (
                                    <>
                                        <img src={item} alt="" className={styles.singleImg} />
                                    </>
                                )
                            })}
                        </div>
                        <div className={styles.main_imgWrapper} onClick={() => setToggler(!toggler)} style={{ cursor: "pointer" }}>
                            <div className={styles.main_img}>
                                <img src={singleProduct.thumbnail} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.info}>
                        <h2 className={styles.title}> {singleProduct.title} </h2>
                        <div className={styles.priceWrapper}>
                            <span className={styles.price_original}> RS: {(singleProduct.price - (singleProduct.discountPercentage / 100)).toFixed(2)}  </span>
                            <span className={styles.price_discount}> {singleProduct.price}  </span>
                        </div>
                        <p className={styles.description}> {singleProduct.description} </p>
                        <button className={styles.cart_btn}> Add to cart </button>
                    </div>
                </div>
            </div>
            <FsLightbox
                toggler={toggler}
                sources={singleProduct.images.map((item: any) => item)}
                type="image"
            />
        </BaseLayout>
    )
}

export const getServerSideProps = async ({params} : any) => {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`).then(data => data.json())
    return {
        props : {
            singleProduct : res,
        }
    }
}

export default SingleProductPage;