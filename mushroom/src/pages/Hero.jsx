import React from 'react'
import OrangeButton from '../components/OrangeButton'

const Hero = () => {
  return (
    <div className='bg-[#F5F5F5] h-screen px-10 py-5 '>
        <div className='w-full h-full bg-[#FBF6F0] rounded-lg flex '>
            <div className=' flex-1 flex flex-col gap-3 justify-center px-25'>
                <p className='text-xl '>100% Natural Products</p>
                <h1 className='text-7xl font-bold'>MUSHROOM</h1>
                <p className='text-lg'>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>
                <div className='flex gap-9'>
                    <OrangeButton label="Buy now"/>
                    <button className='border-1 px-6 rounded-md '>Contact Us</button>
                </div>
            </div>
            <img  src="/assets/hero-mushroom.png" alt="hero-mushroom" className='flex-1 pt-5' />
        </div>
    </div>
  )
}

export default Hero