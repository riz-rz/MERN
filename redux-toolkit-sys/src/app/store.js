import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/products/ProductSlice";

const store =configureStore({
    reducer:{
        Products: ProductReducer
    }
})

export default store