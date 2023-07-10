import axios from "axios"

export const instance  = axios.create({
    baseURL : "https://dummyjson.com/products?limit=100&skip=0"
})

export const getProducts = async() => {
    try {
        const res = await instance.get('')
        return res.data.products; 

    } catch (error : any) {
        console.log("error in getting products", error.message)
    }
}

export const getProductsCategory = async() => {
    try {
        const res = await instance.get('')
        const response = res.data.products;
        const cat = response.map(item => item.category)
        const updated = [...new Set(cat)]
        return updated;
    }
    catch(error) {
        console.log("error", error)
    }
}
