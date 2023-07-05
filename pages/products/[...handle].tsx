import { useRouter } from 'next/router';
import styles from '../../styles/single_product.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SingleProductPage = () => {
    const router = useRouter();
    const [product, setProduct] = useState<any>({})

    const id = router.query && router.query.handle;

    useEffect(() => {
        const get_product = async () => {
            const res = await axios.get("https://dummyjson.com/products/1")
            if (res) {
                setProduct(res.data)
            }
        }
        get_product()
    }, [])

    return (
        <div className={styles.singleProduct}>
            <div className={styles.left}>
                <div className={styles.leftWrapper}>
                    <div className={styles.img_wrapper}>
                        {product.images?.slice(0, 3).map((item: any) => {
                            return (
                                <>
                                    <img src={item} alt="" className={styles.singleImg} />
                                </>
                            )
                        })}
                    </div>
                    <div className={styles.main_imgWrapper}>
                        <div className={styles.main_img}>
                            <img src={product.thumbnail} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.info}>
                    <h2 className={styles.title}> {product.title} </h2>
                    <div className={styles.priceWrapper}>
                        <span className={styles.price_original}> RS: {product.price} </span>
                        <span className={styles.price_discount}> {product.discountPercentage} </span>
                    </div>
                    <p className={styles.description}> {product.description} </p>
                    <button className={styles.cart_btn}> Add to cart </button>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage;