import React from 'react'

//components
import Sidebar from '../../../Components/Admin/Sidebar/sidebar'

import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>

      <Sidebar></Sidebar>
      <div className="relative md:ml-64  h-screen bg-blue-200 ">
        <Outlet />
      </div>


    </>
  )
}

export default Dashboard
