import React from 'react'

const OrangeButton = ({label}) => {
  return (
    <button className='w-fit h-11 bg-orange-600 px-5 py-2 rounded-sm text-white font-semibold hover:bg-orange-800  '>
        {label}
    </button>
  )
}

export default OrangeButton