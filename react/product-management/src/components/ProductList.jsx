import React, { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import AddProduct from './AddProduct'
import SearchProducts from './SearchProducts'
import EmptyState from './EmptyState'

const ProductList = ({products,setProducts}) => {
 
    const categories = ["all", ...new Set(products.map((product)=>product.category))]    //this gets rid of the repetation while using map as it is
    
    const [Category, setCategory] = useState("all")
    const [FormVis, setFormVis] = useState(false)
    const [Search,setSearch] = useState("")


   

            //THE CATG FILTER LOGIC 

    // const filteredProducts = useMemo(()=>{
    //     return Category === "all" 
    //         ? products 
    //         : products.filter((prod)=>prod.category === Category)
    // },[Category, products])



            //BASICALLY THE SEARCH FUNC BUT SHOULD BE COMBINED WITH CATG.

    // const searchedProducts = useMemo(()=>{
    //     return products.filter((prod)=>{
    //         prod.name.toLowecase().includes(Search.toLowecase())
    //     })
    // },[products, Search])



 const filteredProducts = useMemo(()=>{
        return products.filter((prod)=>{
            return (
                ( prod.category === Category || Category === "all") &&
                prod.name.toLowerCase().includes(Search.toLowerCase())
            )
        })

    },[Category, products,Search])



    // console.log(categories);
    // console.log(products);
    // console.log(filteredProducts);

    
 
    return (
    <div className='min-h-screen bg-[#F6F0D7] px-10 text-[#54613a] overflow-hidden'>
        <div className='h-25 flex flex-row-reverse justify-between items-center  '>
            <div className='relative'>
                <button onClick={()=>setFormVis(true)} className='border p-2 rounded-xl bg-gray-100'>Add Product</button>
                
                <div className='absolute right-0 top-10 bg-[#9CAB84] translate-x-150 z-2' style={{translate: FormVis && "0"}}>
                    <AddProduct setProducts={setProducts} setFormVis={setFormVis} />
                </div>
            </div>
            <select onChange={(e)=>setCategory(e.target.value)} className='border outline-none w-40 h-10 rounded-xl  bg-gray-100 px-3' value={Category}  >
                {
                    categories.map((category)=>{
                        return <option value={category} className='capitalize bg-[#F6F0D7] '>{category}</option>
                    })
                }
            </select>
            <p>Total Products: {filteredProducts.length}</p>
            <div><SearchProducts Search={Search} setSearch={setSearch}/> </div>

        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                filteredProducts.length > 0 
                ? filteredProducts.map((product)=>{
                    return(
                        <ProductCard key={product.id} product={product} setProducts={setProducts}/>
                    )
                })
                : (
                    <EmptyState/>
                )
            }

        </div>
    </div>
  )
}

export default ProductList