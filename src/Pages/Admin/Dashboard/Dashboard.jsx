import React,{useEffect, useState} from 'react'


//components
import Sidebar from '../../../Components/Admin/Sidebar/sidebar'

import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const [state,setState]=useState(false)
 
  useEffect(()=>{
    const token = localStorage.getItem('Admintoken')
    setState(token)
  },[state])
  
  return (
    <>
      <Sidebar></Sidebar>
      <div className="relative md:ml-64  h-screen bg-[#d3d1ce] pt-12 ">
        {/* <Outlet /> */}
        { state ? <Outlet />: navigate('/admin') }
      </div>
    </>
  )
}

export default Dashboard
