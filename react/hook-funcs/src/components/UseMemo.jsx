import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    
    const [count, setCount] = useState(0)

    const expensiveCalcu = (num) =>{
        console.log("the function is running....");
        return num*8;
    }

    // useMemo is used to memorise the a value rather than a function
    const result= useMemo(()=>{
         return expensiveCalcu(90)
    },[])

    
    return (
    <div className='h-screen flex flex-col gap-5 bg-emerald-400 justify-center items-center'>
        <h1 className='font-bold text-8xl'>{result}</h1>
        <button className='border rounded-full p-2 ' onClick={()=>setCount(count + 1)} >counter : {count}</button>
    </div>
  )
}

export default UseMemo