import React from 'react'
import { FaRegSadCry } from "react-icons/fa";


const EmptyState = () => {
  return (
    <div className='h-[60vh] w-screen flex justify-center items-center'> 
        <div className='h-fit w-fit space-y-10 flex flex-col justify-center items-center'>
            <FaRegSadCry size={150}/> 
            <h1 className='font-bold text-3xl'>NOTHING TO SEE HERE  :(</h1>

        </div>
    </div>
  )
}

export default EmptyState