import React from 'react'
import OrangeButton from '../components/OrangeButton'

const Section = ({direction='row', sectionName, sectionImg, sectionDesc}) => {
  return (
    <div className={`w-full  bg-[#F5F5F5] flex flex-${direction} justify-center items-center px-25 py-25`}>
        <div>
            <img src={sectionImg} alt="random-mushroom" className='w-130 flex-1' />
        </div>
        <div className='flex-1  h-full flex flex-col justify-center px-15 gap-4'>
            <p className='text-orange-600 font-mono '>{sectionName}</p>
            <p className='text-[42px] font-bold text-slate-800'>{sectionDesc}</p>
            <p className='text-lg text-slate-900 '>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of mushroom have varying compositions and nutritional profiles.</p>
            <OrangeButton label="Read More"/>
        </div>
    </div>
  )
}

export default Section