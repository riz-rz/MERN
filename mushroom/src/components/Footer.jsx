import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[120vh] bg-[#F5F5F5] relative'>
        <div className='w-[70%] h-[40%] bg-white absolute top-40 left-50 z-2 flex flex-col justify-center items-center gap-5'>
            <h1 className='text-5xl font-semibold'>Subscribe to our Newsletter</h1>
            <p className='text-center text-lg'>Mushrooms are edible fungus that can provide several important nutrients.</p>
            <div>
                <input type="email" placeholder='Enter your email here' className='border-1 border-gray-300 p-[15px] w-90 rounded-tl-2xl rounded-bl-2xl' />
                <button className='bg-orange-600 w-fit py-4 px-8 rounded-tr-2xl rounded-br-2xl'>Subscribe</button>
            </div>
        </div>
        <div className='w-full  bg-black absolute bottom-0 flex justify-evenly py-20'>
            <div className='flex flex-col'>
                <img className='w-40' src="/assets/logo-footer.svg" alt="footer-logo" />
                <p className='text-gray-400 fotn-sm'>625 E Franklin Ave, Minneapolis,MN 55404, USA</p>
                <p className='text-gray-400 fotn-sm'>@2022 Alien World. All rights reserved.</p>
            </div>
            <div>
                <h2 className='text-white font-semibold text-2xl'>About Us</h2>
                <ul className='space-y-4 pt-7'>
                    <li className='text-gray-400 '>Our story</li>
                    <li className='text-gray-400 '>Designer</li>
                    <li className='text-gray-400 '>Craftsmanship</li>
                    <li className='text-gray-400 '>Sustainability</li>
                </ul>
            </div>
            <div>
                <h2 className='text-white font-semibold text-2xl'>Support</h2>
                <ul className='space-y-4 pt-7'>
                    <li className='text-gray-400 '>FAQ's</li>
                    <li className='text-gray-400 '>hippping & returns</li>
                    <li className='text-gray-400 '>care guide</li>
                    <li className='text-gray-400 '>price list</li>
                </ul>
            </div>
            <div>
                <h2 className='text-white font-semibold text-2xl'>Contace Us</h2>
                <ul className='space-y-4 pt-7'>
                    <li className='text-gray-400 flex'><img src="/assets/phone.svg" alt="phone" /> + 1253 211 523</li>
                    <li className='text-gray-400 flex'><img src="/assets/envelop.svg" alt="mail" />hello@shopping.com</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer