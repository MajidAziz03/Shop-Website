import { Star } from '@mui/icons-material';
import styles from './Product.module.scss';

const Product = () => {
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src="https://images.pexels.com/photos/14421162/pexels-photo-14421162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.info}>
                <span className={styles.title}> Iphone 12 </span>
                <div className={styles.price}>
                    <span> Rs. 549.00  </span>
                    <span className={styles.discountPrice}> 572.00 </span>
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