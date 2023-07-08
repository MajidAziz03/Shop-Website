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
                <button> SHOP NOW </button>
            </div>
        </div>
    )
}

export default FeaturedComp;