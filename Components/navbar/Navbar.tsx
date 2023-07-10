import { Menu, Search, SearchOff, SearchOffOutlined, SearchRounded, ShoppingCart } from '@mui/icons-material';
import styles from './navbar.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store/store';
import { userLogout } from '@/redux/slices/userSlice';
import { getProducts } from '@/functions/productFunction';

const Navbar = () => {
    const path = useRouter().pathname;
    const [navInProducts, setNavInProducts] = useState(false)
    const user = useAppSelector((state: RootState) => state.user.user.token)
    const dispatch = useAppDispatch()
    const router = useRouter()
    const searchValue = useRef<any>()
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (path === '/products') {
            setNavInProducts(true)
        }
        else {
            return;
        }
    }, [path])

    useEffect(() => {
        getProducts().then(data => setProducts(data))
    }, [])

    const handleLogout = () => {
        dispatch(userLogout())
        router.push("/user/login")
    }

    const handleSearchProduct = (e : any) => {
        let results = products || [];
        if(e.target.value !== "") {
            searchValue.current = e.target.value.toLowerCase();
            results = results.filter((product  : any) => {
                return product.title.toLowerCase().includes(searchValue.current)
            })
        }
        else {
            results = [];
        }
        setFilteredProducts(results);
    }

    return (
        <div className={styles.navbar} id='navbar' style={navInProducts ? { background: "#78bc24", } : {}}>
            <Menu onClick={() => setToggle(!toggle)} className={styles.menuIconBar} />
            <div className={toggle ? `${styles.menu_mobile_hidden} ${styles.menu_mobile_show}` : styles.menu_mobile_hidden}>
                <div className={styles.menu_links}>
                    <span> Home </span>
                    <span> About </span>
                    <Link style={{ textDecoration: "none", color: "inherit" }} href={'/products'}><span> Products </span></Link>
                    <span> Contact </span>
                    <span className={styles.auth}> Login </span>
                    <span className={styles.auth}> Signup </span>
                    <span className={styles.auth}> Logout </span>
                </div>
            </div>
            <div className={styles.left}>
                <div className={styles.search_wrapper}>
                    <div className={styles.search}  style={filteredProducts.length > 0 ? {borderBottom : "none"} : {} } >
                        <SearchRounded className={styles.iconSearch} />
                        <input type="text" placeholder='Search Product' onChange={handleSearchProduct} />
                    </div>
                    {filteredProducts.length > 0 && 
                    <div className={styles.filteredResults}>
                        {
                            filteredProducts.length && filteredProducts.map((item : any) => {
                                return (
                                    <>
                                    <Link href={`/products/${item.id}`}><div className={styles.single_results}>
                                        <img src={item.thumbnail} alt="" className={styles.product_img} />
                                        <div className={styles.title}> {item.title} </div>
                                    </div>
                                    </Link>
                                    </>
                                )
                            })
                        }
                    </div>
                    }
                </div>
            </div>
            <div className={styles.middle}>
                <Link style={{ textDecoration: "none", color: "inherit" }} href={'/'}><h3> MAJID. </h3> </Link>
            </div>
            <div className={styles.right}>
                {
                    !user
                        ?
                        (<>
                            <Link style={{ textDecoration: "none", color: "inherit" }} href={'/user/login'}><span className={styles.buttonsRight}> LOGIN </span></Link>
                            <Link style={{ textDecoration: "none", color: "inherit" }} href={'/user/register'}><span className={styles.buttonsRight}> SIGNUP </span></Link>
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