import React, { useEffect, useRef } from 'react'

const UseRef = () => {
//   ref is used to take a vlaue that is to be changed
    const inputRef = useRef(null)

    console.log(inputRef.current);
    
    // to focus on restart 
    // useEffect(()=>{
    //     inputRef.current.focus()
    // })


    const handleFocus=()=>{
        inputRef.current.focus()
    }
  
  
    return (
    <div className='h-screen py-10 flex justify-center items-start gap-10 '>
        <input ref={inputRef} type="text" className='border w-100  h-10 rounded-full px-4 outline-1 outline-amber-300' />
        <button onClick={handleFocus} className='bg-yellow-100 w-fit py-2 px-5 rounded-full border-1 border-amber-500'>Focusss!</button>
    </div>
  )
}

export default UseRef