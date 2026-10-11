import React from 'react'
import { SiDarkreader } from "react-icons/si";


const Header = ({DarkMode, setDarkMode}) => {
  return (
    <div className={`w-full h-25  flex justify-center items-center relative ${DarkMode?"bg-[#1f6b24]  ":"bg-[#9CAB84]"}`}>
        <h1 className='text-4xl text-gray-100 font-mono'>Product Managemet Dashboard</h1>
        <SiDarkreader size={30} className='absolute right-10' onClick={()=> setDarkMode(!DarkMode) }/>

    </div>
  )
}

export default Header