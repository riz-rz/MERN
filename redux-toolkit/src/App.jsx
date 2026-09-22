import React, { useEffect } from 'react'
import Header from './components/Header'
import './index.css'
import Products from './pages/Products'
import { useDispatch } from 'react-redux'
import { loadProducts } from './features/products/ProductSlice'
import Login from './pages/Login'
import Register from './pages/Register'
import {Toaster} from "react-hot-toast"


const App = () => {
  

    const dispatch = useDispatch()

    const fetchProducts =async ()=>{
    try {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        // console.log(data);
        
        dispatch(loadProducts(data.products))        
    } catch (error) {
        console.log(error);
        
    }

  }

  useEffect(()=>{
    fetchProducts()
  },[])
  
  
    return (
    <div>
        <Toaster/>
        <Header/>
        {/* <Products/> */}
        <Login/>
        {/* <Register/> */}
    </div>
  )
}

export default App