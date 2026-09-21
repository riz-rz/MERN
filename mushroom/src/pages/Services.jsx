import React from 'react'

const Services = () => {
  return (
    <div className='w-full h-[90vh]  flex flex-col items-center gap-3 py-15 bg-[#F5F5F5] '>
        <p className='text-orange-600 font-mono  '>S E R V I C E</p>
        <p className='font-semibold text-5xl text-slate-800'>We offer for you</p>
        <div className='grid grid-cols-3 w-full h-full gap-10 px-25 pt-2'>
            <div className='bg-[#F5F5F5] h-full rounded-2xl border-1 border-slate-300 hover:scale-101 hover:bg-white flex flex-col justify-center px-7 gap-10'>
                <img src="/assets/card (1).png" alt=" truck" className='w-25'  />
                <p className='text-4xl font-bold '>Free Shipping</p>
                <p className='text-md text-slate-900'>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
            <div className='bg-[#F5F5F5] h-full rounded-2xl border-1 border-slate-300 hover:scale-101 hover:bg-white flex flex-col justify-center px-7 gap-10'>
                <img src="/assets/card (2).png" alt=" truck" className='w-20'  />
                <p className='text-4xl font-bold '>Certified Organic</p>
                <p className='text-md text-slate-900'>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
            <div className='bg-[#F5F5F5] h-full rounded-2xl border-1 border-slate-300 hover:scale-101 hover:bg-white flex flex-col justify-center px-7 gap-10'>
                <img src="/assets/card (3).png" alt=" truck" className='w-15'  />
                <p className='text-4xl font-bold '>Easy Returns</p>
                <p className='text-md text-slate-900'>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
        </div>
    </div>
  )
}

export default Services