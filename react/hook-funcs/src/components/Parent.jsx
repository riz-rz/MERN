import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
  
        const [count, setCount] = useState(0)
    
        console.log("parent rendering...");
        
            // usecallback is used to memorise the function so that it is only created once

        const greetings = useCallback(()=>{    
            console.log("vanakkam");
            
        },[])
  
    return (
    <div className='h-screen flex flex-col gap-5 p-40'>
        <button className='border rounded-full p-2 ' onClick={()=>setCount(count + 1)} >counter : {count}</button>
        <Child onclick={greetings}/>
    </div>
  )
}

export default Parent