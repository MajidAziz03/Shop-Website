import axios from "axios"

const instance  = axios.create({
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