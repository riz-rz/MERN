import React, { useState } from 'react'

const AddProduct = ({setProducts, setFormVis}) => {
  
    const [Formvalues,setFormValues] = useState({
        name:"",
        image:"",
        price:"",
        category:""
    })

    const handleChange=(e)=>{
        const {name,value}= e.target
        setFormValues({...Formvalues, [name]:value})
    }

    const handleSubmit=(e)=>{

        if(!Formvalues.name || !Formvalues.image || !Formvalues.price || !Formvalues.category){
            alert("fill the form first bro....")
            return
        }
        e.preventDefault()
        setProducts((prev)=>{
            return [...prev, {Formvalues, id:prev.lenght+1}]
        })
        setFormValues({
        name:"",
        image:"",
        price:"",
        category:""
    })
         setFormVis(false)

    }


    



    return (
    <div>
        <form onSubmit={handleSubmit} action="" className='w-sm min-h-sm flex flex-col gap-5 border items-center py-3'>
            <input onChange={handleChange} value={Formvalues.name} type="text" name='name' placeholder='Enter Product Name' className='border-b border-[#F6F0D7] px-5 py-1 outline-none w-full' />
            <input onChange={handleChange} value={Formvalues.price} type="text" name='price' placeholder='Enter Product price' className='border-b border-[#F6F0D7] px-5 py-1 outline-none w-full' />
            <input onChange={handleChange} value={Formvalues.category} type="text" name='category' placeholder='Enter Product category' className='border-b border-[#F6F0D7] px-5 py-1 outline-none w-full' />
            <input onChange={handleChange} value={Formvalues.image} type="text" name='image' placeholder='Enter Product image url' className='border-b border-[#F6F0D7] px-5 py-1 outline-none w-full' />
            <button  className='border-b w-50 border-[#F6F0D7] py-3 outline-none bg-[#F6F0D7] rounded-xl'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct