import { Search, ShoppingCart } from '@mui/icons-material';
import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.search}>
                    <input type="text" placeholder='Search Product' />
                    <span className={styles.iconSearch}><Search className={styles.searchIcon} /> </span>
                </div>
            </div>
            <div className={styles.middle}>
                <h3> LOGO. </h3>
            </div>
            <div className={styles.right}>
                <span className={styles.buttonsRight}> LOGIN </span>
                <span className={styles.buttonsRight}> SIGNUP </span>
                <div className={styles.logoRight}>
                    <ShoppingCart className={styles.iconRight} />
                    <div className={styles.number}>
                        <span> 3 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;