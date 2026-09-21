import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { deleteProducts } from '../features/products/ProductSlice';



const Product = () => {

    const {data , loading} = useSelector((state)=>state.productStore)

    const dispatch = useDispatch()

    const handleDeleteProduct=(productId)=>{
        dispatch(deleteProducts(productId))
    }

    if(loading){
        return(
           <div className=' h-screen flex justify-center items-center'>
                <div className=' w-20 h-20 rounded-full border-4 border-b-0  border-black animate-spin'></div>
            </div>
        )
    }


    return (
    <div className='h-screen py-10'>
        <h1 className=' px-110 text-4xl font-mono'>List of Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-10 p-6'>
            {
                data&&data.map((product)=>{
                // console.log(product);

                    return(
                        <div key={product.id} className='border flex flex-col items-center relative  '>
                            <div>
                                <img src={product.thumbnail} alt="" />
                            </div>
                            <h1 >{product.title}</h1>
                            <button onClick={handleDeleteProduct} className='absolute right-0 '  >
                                <MdDelete size={30} color={"crimson"} />
                            </button>
                        </div>
                    )

                })

            }
        </div>
    </div>
  )
}

export default Product