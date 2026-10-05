import React from 'react'
import { CiSearch } from 'react-icons/ci'


const SearchProducts = ({Search,setSearch}) => {

    const handleSearch=(e)=>{
      setSearch(e.target.value)
      // console.log(Search);     logs whatever that is typed in
      
    }


  return (
    <div className='relative'>
        <input type="text" placeholder='search products here' className='border outline-none px-10 py-2 rounded-3xl w-75' onChange={handleSearch}  />
        <span className='absolute left-3 top-3'> <CiSearch size={20} /> </span>
    </div>
  )
}

export default SearchProducts