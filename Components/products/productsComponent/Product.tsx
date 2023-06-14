import { Star } from '@mui/icons-material';
import styles from './Product.module.scss';
import { ProductType } from '@/types/productType';

const Product = ({products} : ProductType) => {
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={products.thumbnail} alt="" />
            </div>
            <div className={styles.info}>
                <span className={styles.title}>{products.title} </span>
                <div className={styles.price}>
                    <span> Rs.{(products.price - products.discountPercentage).toFixed(2)}  </span>
                    <span className={styles.discountPrice}> {products.price.toFixed(2)} </span>
                </div>
                <div className={styles.rating}>
                    <span> <Star className={styles.star} />  </span>
                    <span> <Star className={styles.star}/>  </span>
                    <span> <Star className={styles.star}/>  </span>
                    <span> <Star className={styles.star}/>  </span>
                </div>
                <span className={styles.brand}>Apple</span>
            </div>
        </div>
    )
}

export default Product;