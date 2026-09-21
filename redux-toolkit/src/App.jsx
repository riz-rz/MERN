import React, { useEffect } from 'react'
import Product from './pages/Product'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { loadProducts } from './features/products/ProductSlice'

const App = () => {
 


  const dispatch = useDispatch()
 
  const fetchProducts =async()=>{
    try {
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
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
      <Header/>
      <Product/>
    </div>
  )
}

export default App