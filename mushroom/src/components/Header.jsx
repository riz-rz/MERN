import React from 'react'
import OrangeButton from './OrangeButton'

const Header = () => {
  return (
<div className='w-full bg-[#F5F5F5] h-25 flex items-center justify-evenly'>
        <div className=' h-full flex items-center justify-center'>
            <img src="/assets/logo.svg" alt="logo" />
        </div>
        <nav >
            <ul className='flex gap-10 text-xl text-slate-900 '>
                <li>Home</li>
                <li>Blog</li>
                <li>Products</li>
                <li>Reviews</li>
            </ul>
        </nav>
        <div className='flex gap-9'>
            <button className='font-semibold text-lg hover:text-orange-600'>Log In</button>
            <OrangeButton label="Sign Up"/>
        </div>

    </div>
  )
}

export default Header