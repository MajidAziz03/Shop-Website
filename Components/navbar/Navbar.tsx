import { Search, ShoppingCart } from '@mui/icons-material';
import styles from './navbar.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
    const path = useRouter().pathname;

    useEffect(() => {
        if (path === '/products') {
            document.getElementById("navbar").style.background = "#948f8fc1";
        }
        else {
            return;
        }
    }, [path])

    return (
        <div className={styles.navbar} id='navbar'>
            <div className={styles.left}>
                <div className={styles.search}>
                    <input type="text" placeholder='Search Product' />
                    <span className={styles.iconSearch}><Search className={styles.searchIcon} /> </span>
                </div>
            </div>
            <div className={styles.middle}>
            <Link style={{textDecoration : "none", color : "inherit"}} href={'/'}><h3> LOGO. </h3> </Link>
            </div>
            <div className={styles.right}>
                <Link style={{textDecoration : "none", color : "inherit"}} href={'/user/login'}><span className={styles.buttonsRight}> LOGIN </span></Link>
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