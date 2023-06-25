export interface ProductType {
    id: number;
    title: string;
    price: number;
    discountPercentage: string;
    rating: number;
    thumbnail: string;
    category: string;
    brand : string;
}


export const brand_filters = ["Apple", "Samsung", "OPPO"]
export const price_filters = ["Low to High", "High to Low"]