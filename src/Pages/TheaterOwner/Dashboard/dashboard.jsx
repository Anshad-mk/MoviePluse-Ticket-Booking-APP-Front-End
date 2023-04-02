import React,{useEffect, useState} from 'react'
//components
import Sidebar from '../../../Components/TheaterOwner/Sidebar/sidebar'
import { Outlet ,Navigate, useNavigate } from 'react-router-dom'

const dashboard = () => {
  const Cinematoken = localStorage.getItem("Cinematoken")
  const [CinemaloggedIn, setCinemaLoggedIn] = useState(Cinematoken);
  const navigate = useNavigate()
  
  useEffect(()=>{   
      setCinemaLoggedIn(Cinematoken)    
  },[CinemaloggedIn])

  return (
    <>
    <div className='h-screen'>
      <Sidebar></Sidebar>
      <div className="relative md:ml-64  h-screen bg-[#d3d1ce] pt-12 ">
       {CinemaloggedIn ? <Outlet /> : <Navigate to={'/Cinemas'}/> } 
      </div>
      </div>
    </>
  )
}

export default dashboard