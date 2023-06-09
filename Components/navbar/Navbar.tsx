import { Search } from '@mui/icons-material';
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
            <div className={styles.middle}></div>
            <div className={styles.right}></div>
        </div>
    )
}

export default Navbar;