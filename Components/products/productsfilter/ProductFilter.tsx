    import { ArrowDownward, ExpandMore } from '@mui/icons-material';
    import styles from './productFilter.module.scss';
    import { useState } from 'react';
import { brand_filters, price_filters } from '@/types/productType';

interface I_Props {
  filters : (e: React.ChangeEvent<HTMLInputElement>) => void;
  brandsFilter : string[];
  priceFilters : (e: React.ChangeEvent<HTMLInputElement>) => void;
  price : string;
}

    const ProductFilter = ({filters,brandsFilter, priceFilters,price} : I_Props) => {
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
            <div className={styles.singleWrapper} onMouseEnter={() => { handleMouseEnter("brand") }} >
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
              {
                brand_filters.map((item, i) => {
                  return (
                    <>
                    <div key={i} className={styles.filterBrand}>
                    <input id={`brands_${i}`} type="checkbox" className={styles.checkbox} onChange={filters} value={item} checked={brandsFilter.includes(item)} />
                    <label htmlFor={`brands_${i}`}>{item} </label>
                    </div>
                    </>
                  )
                })
              }
            </div>
          }
          {
            priceCollapse
            &&
            <div className={styles.expanded} onMouseLeave={() => { handleMouseLeave("price") }}>
              {
                price_filters.map((item, i) => (
                  <>
                    <div key={i} className={styles.filterBrand}>
                      <input type="radio" name="price" className={styles.checkbox} id={`products_${i}`} value={item} onChange={priceFilters} />
                      <label htmlFor={`products_${i}`}> {item} </label>
                    </div>
                  </>
                ))
              }
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

