import { Search, ShoppingCart } from '@mui/icons-material';
import styles from './navbar.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import { userLogout } from '@/redux/slices/userSlice';

const Navbar = () => {
    const path = useRouter().pathname;
    const [navInProducts, setNavInProducts] = useState(false)
    const user = useAppSelector((state : RootState) => state.user.user.token)
    const dispatch = useAppDispatch()
    const router = useRouter()

    useEffect(() => {
        if (path === '/products') {
            setNavInProducts(true)
        }
        else {
            return;
        }
    }, [path])

    const handleLogout = () => {
        dispatch(userLogout())
        router.push("/user/login")
    }

    return (
        <div className={styles.navbar} id='navbar' style={navInProducts ? {background : "#78bc24",} : {}}>
            <div className={styles.left}>
                <div className={styles.search} style={navInProducts ? {display : "none"} : {}}>
                    <input type="text" placeholder='Search Product'  />
                    <span className={styles.iconSearch}><Search className={styles.searchIcon} /> </span>
                </div>
            </div>
            <div className={styles.middle}>
            <Link style={{textDecoration : "none", color : "inherit"}} href={'/'}><h3> LOGO. </h3> </Link>
            </div>
            <div className={styles.right}>
                {
                    !user
                    ?
                    (<>
                    <Link style={{textDecoration : "none", color : "inherit"}} href={'/user/login'}><span className={styles.buttonsRight}> LOGIN </span></Link>
                    <Link style={{textDecoration : "none", color : "inherit"}} href={'/user/register'}><span className={styles.buttonsRight}> SIGNUP </span></Link>
                    </>)
                    :
                    <span className={styles.buttonsRight} onClick={handleLogout}> LOGOUT </span>
                }
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