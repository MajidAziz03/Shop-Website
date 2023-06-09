import styles from './featured.module.scss';
import FeaturedComp from './featuredComponent/FeaturedComp';

const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.wrapperComponent}>
                <FeaturedComp img = 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  />
                <FeaturedComp img = 'https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg?auto=compress&cs=tinysrgb&w=600' />
                <FeaturedComp img = 'https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            </div>
        </div>
    )
}

export default Featured;