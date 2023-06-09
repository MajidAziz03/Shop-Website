import styles from './featuredComp.module.scss';

interface Props { 
    img : string;
}

const FeaturedComp = ({img} : Props) => {
    return (
        <div className={styles.wrapper} style={{backgroundImage : `url(${img})`}}>
            <div className={styles.info}>
                <span> SHIRT STYLE </span>
                <button> SHOP NOW </button>
            </div>
        </div>
    )
}

export default FeaturedComp;