import styles from './featured.module.scss';
import FeaturedComp from './featuredComponent/FeaturedComp';

const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.wrapperComponent}>
                <FeaturedComp img = 'https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title = {"Laptops"}  />
                <FeaturedComp img = 'https://images.pexels.com/photos/965994/pexels-photo-965994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title = "Fragnances" />
                <FeaturedComp img = 'https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title = "Home Essentials" />
            </div>
        </div>
    )
}

export default Featured;