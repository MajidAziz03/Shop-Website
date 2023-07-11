import { Favorite, Star } from '@mui/icons-material';
import styles from './Product.module.scss';
import { ProductType } from '@/types/productType';
import Link from 'next/link';
import { useState } from 'react';

const Product = ({ products }: any) => {
    const [favFilled, setFavFilled] = useState(false)

    const handleFavClicked = (product : any) => {
        setFavFilled(!favFilled)
        console.log(product)
    }

    return (
        <div className={styles.product}>
                <div className={styles.favIconWrapper}> 
                <Favorite className={styles.favIcon} style={favFilled ? {fill : "pink"} : {fill : "#cacaca"}} onClick = {() => handleFavClicked(products)} /> 
                </div>
                <Link href={`/products/${products.id}`} style={{ textDecoration: "none", color: "inherit" }} >
                <div className={styles.image}>
                    <img src={products.thumbnail} alt="" />
                </div>
                </Link>
                <div className={styles.info}>
                    <span className={styles.title}>{products.title} </span>
                    <div className={styles.price}>
                        <span> Rs.{(products.price - products.discountPercentage).toFixed(2)}  </span>
                        <span className={styles.discountPrice}> {products.price.toFixed(2)} </span>
                    </div>
                    <div className={styles.rating}>
                        <span> <Star className={styles.star} />  </span>
                        <span> <Star className={styles.star} />  </span>
                        <span> <Star className={styles.star} />  </span>
                        <span> <Star className={styles.star} />  </span>
                    </div>
                    <span className={styles.brand}>{products.brand}</span>
                </div>
            </div>
    )
}

export default Product;