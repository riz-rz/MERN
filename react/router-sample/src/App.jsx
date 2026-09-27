import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import DashboardLayout from './layouts/DashboardLayout'
import Users from './Pages/Users'
import Posts from './Pages/Posts'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/dashboard' element={<DashboardLayout/>} >
          <Route path='/dashboard/users' element={<Users/>}/>
          <Route path='/dashboard/posts' element={<Posts/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App