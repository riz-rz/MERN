import {createSlice} from "@reduxjs/toolkit"

const initialState={
    data:[],
    loading: true,
}

const ProductSlice = createSlice({
    name:"Products",
    initialState:initialState,
    reducers:{
        loadProducts:(state, actions)=>{
            // console.log(actions.payload);
            state.data = actions.payload
            state.loading = false
        },
        deleteProducts:(state, actions)=>{
            const productId = actions.payload
            state.data = state.data.filter((product)=>product.id !== productId)
        }
    }
})

export const {loadProducts,deleteProducts} = ProductSlice.actions
export default ProductSlice.reducer


