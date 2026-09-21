import {configureStore} from "@reduxjs/toolkit"
import ProductReducer from "../features/products/ProductSlice"


const store = configureStore({
    reducer:{
        productStore: ProductReducer
    }
})

export default store