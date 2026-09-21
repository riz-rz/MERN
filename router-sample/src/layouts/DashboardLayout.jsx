import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Users from '../Pages/Users'

const DashboardLayout = () => {
  return (
    <div className='flex'>
        <div className='bg-green-900 text-2xl text-white h-screen w-[20%] px-5 py-10'>
            <ul className='space-y-6'> 
                <li>
                    <Link to="/dashboard/users" >
                        Users
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/posts" >
                        Posts
                    </Link>
                </li>
                <li>settings</li>
                <li>notifications</li>
                <li>messages</li>
                <li>ui kit</li>
                <li>templates</li>
                <li>random somethings</li>
            </ul>
        </div>
        <div className='bg-green-600 h-screen w-[80%] p-10'> 
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout