    import { ArrowDownward, ExpandMore } from '@mui/icons-material';
    import styles from './productFilter.module.scss';
    import { useState } from 'react';

    const ProductFilter = () => {
      const [brandCollapse, setBrandCollapse] = useState(false)
      const [priceCollapse, setPriceCollapse] = useState(false)
      const [ratingCollapse, setRatingCollapse] = useState(false)

      const handleMouseEnter = (type: string) => {
        if (type === 'brand') {
          setBrandCollapse(true)
          setPriceCollapse(false)
          setRatingCollapse(false)
        }
        if (type === 'price') {
          setBrandCollapse(false)
          setPriceCollapse(true)
          setRatingCollapse(false)
        }
        if (type === 'rating') {
          setBrandCollapse(false)
          setPriceCollapse(false)
          setRatingCollapse(true)
        }
      }

      const handleMouseLeave = (type: string) => {
        if (type === 'brand') {
          setBrandCollapse(false)
        }
        if (type === 'price') {
          setPriceCollapse(false)
        }
        if (type === 'rating') {
          setRatingCollapse(false)
        }
      }

      return (
        <div className={styles.productsFilter}>
          <div className={styles.categoryholder}>
            <div className={styles.singleWrapper} onMouseEnter={() => { handleMouseEnter("brand") }}>
              <span> Brand </span>
              <span><ExpandMore /></span>
            </div>
            <div className={styles.singleWrapper} onMouseEnter={() => { handleMouseEnter("price") }}>
              <span> Price </span>
              <span><ExpandMore /></span>
            </div>
            <div className={styles.singleWrapper} onMouseEnter={() => { handleMouseEnter("rating") }}>
              <span> Rating </span>
              <span><ExpandMore /></span>
            </div>
          </div>
          {
            brandCollapse
            &&
            <div className={styles.expanded} onMouseLeave={() => { handleMouseLeave("brand") }}>
              <div className={styles.filterBrand}>
                <input type="checkbox" className={styles.checkbox} />
                <label> Apple </label>
              </div>
            </div>
          }
          {
            priceCollapse
            &&
            <div className={styles.expanded} onMouseLeave={() => { handleMouseLeave("price") }}>
              <div className={styles.filterBrand}>
                <span> Low To High </span>
                <span> High to Low </span>
              </div>
            </div>
          }
          {
            ratingCollapse
            &&
            <div className={styles.expanded} onMouseLeave={() => { handleMouseLeave("rating") }}>
              <div className={styles.filterBrand}>
                <input type="checkbox" className={styles.checkbox} />
                <label> stars </label>
              </div>
            </div>
          }
        </div>
      )
    }

    export default ProductFilter;
