import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
  
  
    const {data,loading} = useSelector((state)=>state.Products)

  
  
    if(loading){
        return(
            <div className='h-screen flex justify-center items-center '>
                <div className='h-12 w-12 border-4 border-b-0 border-red-900 rounded-full animate-spin '></div>
            </div>
        )
    }


  
    return (
    <div className='h-screen p-10 flex justify-center items-center'>
        <h1 className='text-3xl font-mono '>SHOP</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                data.map((product)=>{
                    console.log(product);

                    return(
                        <div key={product.id} className=' relative border p-5 text-center flex flex-col items-center '>
                                <img src={product.thumbnail} alt={product.title} />
                                <h1>
                                    {product.title}
                                </h1>
                            </div>
                    )
                    
                })
            }

        </div>
    </div>
  )
}

export default Products