import Link from 'next/link';
import styles from './featuredComp.module.scss';

interface Props { 
    img : string;
    title  : string;
}

const FeaturedComp = ({img, title} : Props) => {
    return (
        <div className={styles.wrapper} style={{backgroundImage : `url(${img})`}}>
            <div className={styles.info}>
                <span> {title} </span>
            <Link href={'/products'}>
                <button> SHOP NOW </button>
            </Link>
            </div>
        </div>
    )
}

export default FeaturedComp;
