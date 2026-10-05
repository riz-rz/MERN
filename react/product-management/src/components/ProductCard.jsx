import React from 'react'
import { MdDelete } from 'react-icons/md'



const ProductCard = ({product, setProducts}) => {
    

    
    const handleDelete=()=>{
       setProducts((prev)=>{
        return prev.filter((prod)=>prod.id !== product.id)
      })
    }
 
    return (
    <div className=' p-5 rounded bg-[#9CAB84] flex flex-col  items-center space-y-3 hover:scale-101 text-white  font-mono'>
      <div className='bg-[#F6F0D7] rounded relative'>
        <img src={product.image} alt={product.title} />
        <button onClick={handleDelete} className='absolute top-2 right-2'>
            <MdDelete color={"#9CAB84"} size={25} />
        </button>
      </div>
        <h1 className='font-semibold text-[20px] '>{product.name}</h1>
        <p>₹{product.price}</p>
        <p className='text-[#F6F0D7]'>Category : {product.category}</p>
    </div>
  )
}

export default ProductCard