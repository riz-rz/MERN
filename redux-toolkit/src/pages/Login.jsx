import React, { useState } from 'react'

const Login = () => {
    

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")





    const handleChange=(e)=>{
        setUsername(e.target.value)
    }
   
    
    const handleSubmit=(e)=>{
         
        e.preventDefault()    
        console.log(username,password);
    }
  
  
    return (
    <div className='h-screen flex justify-center py-20 '>
        <form onSubmit={handleSubmit} className='w-1/2 h-fit md:w1/3 bg-red-200 p-20 flex flex-col gap-5 rounded-lg '  >
            <div className='flex flex-col gap-2'>
                <label htmlFor="username" className=' font-mono font-bold text-2xl' >Username</label>
                <input onChange={handleChange} className='border outline-none p-3 rounded-lg' type="text" placeholder='Enter your username' id='username' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="password" className=' font-mono font-bold text-2xl' >Password</label>
                <input onChange={handleChange} className='border outline-none p-3 rounded-lg' type="password" placeholder='Enter your password' id='password' />
            </div>
            <button className='border outline-none p-2 rounded-lg font-mono text-xl bg-linear-30 from-rose-300 to-rose-700  text-white'>LOGIN</button>
        </form>

    </div>
  )
}

export default Login