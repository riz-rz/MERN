import {createSlice} from "@reduxjs/toolkit";

const initialState={
    data:[],
    loading:true,
    error:"",
}

const productSlice = createSlice({
    name:"products",
    initialState: initialState,
    reducers:{
        loadProducts:(state, actions)=>{
            // console.log(actions);
            
            state.data = actions.payload
            state.loading = false 
        },
    }
})


export const {loadProducts} = productSlice.actions
export default productSlice.reducer