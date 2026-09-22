import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Register = () => {
  
    const [formValues, setFormValues] = useState({
        username:"",
        age:"",
        email:"",
        number:""
    })

    const [formErrors, setFormErrors]=useState({})

    // console.log(formErrors);
    

    const handleChange=(e)=>{

        const {name, value} = e.target

        setFormValues({...formValues,[name]: value})

    }

    const validate =(values)=>{
        const errors ={}

        // username validation

        if(!values.username){
            errors.username="Username must be filled" 
        }else if(values.username.length < 3){
            errors.username="Username must have minimum of 3 characters"
        }

        // age validation

        if(!values.age){
            errors.age="age is required"
        }else if(values.age < 21){
            errors.age="user must be 21+"
        }

        // email validation

        if(!values.email){
            errors.email="Mail Id is required"
        }

        // number validation

        if(!values.number){
            errors.number="Mobile number is required"
        }else if(values.number.length !== 10){
            errors.number="provide a proper number"
            
        }

        return errors
        
    }
    

    const handleSubmit=(e)=>{
        e.preventDefault()

        const errors = validate(formValues)
            
        setFormErrors(errors)

        if(Object.keys(errors).length === 0){
            // register logic

            console.log(formValues);

            setFormValues({
                username:"",
                age:"",
                email:"",
                number:""
            })

            toast.success("register successfull")
        }
        // console.log(Object.keys(errors));
    }
  
    // console.log(formValues);
    
  
  
    return (
    <div className='h-screen flex justify-center pt-10 '>
        <form onSubmit={handleSubmit} className='w-1/2 md:w1/3  bg-linear-30 from-slate-100 to-slate-950 text-white px-20 py-10 h-fit flex flex-col gap-5 border-2 border-black  rounded-lg '  >
            <div className='flex flex-col gap-2'>
                <label htmlFor="username" className=' font-mono font-bold text-2xl' >Username</label>
                <input onChange={handleChange} value={formValues.username} className='border outline-none p-3 rounded-lg' type="text" name='username' placeholder='Enter your username' id='username' />
                <p className= 'text-red-500 text-sm  '>  {formErrors.username && formErrors.username}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="age" className=' font-mono font-bold text-2xl' >Age</label>
                <input onChange={handleChange} value={formValues.age} className='border outline-none p-3 rounded-lg' type="number" name='age' placeholder='Enter your Age' id='age' />
                <p className= 'text-red-500 text-sm  '>  {formErrors.age && formErrors.age}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email" className=' font-mono font-bold text-2xl' >Email</label>
                <input onChange={handleChange} value={formValues.email} className='border outline-none p-3 rounded-lg' type="email" name='email' placeholder='Enter your email' id='email' />
                <p className= 'text-red-500 text-sm  '>  {formErrors.email && formErrors.email}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="phone-number" className=' font-mono font-bold text-2xl' >Mobile Number</label>
                <input onChange={handleChange} value={formValues.number} className='border outline-none p-3 rounded-lg' type="number" name='number'  placeholder='Enter your Mobile Number' id='phone-number' />   
                <p className= 'text-red-500  text-sm  '>  {formErrors.number && formErrors.number}</p>
            </div>
            <button className='border outline-none p-2 rounded-lg font-mono text-xl bg-slate-950  text-white'>LOGIN</button>
        </form>
    </div>
  )
}

export default Register