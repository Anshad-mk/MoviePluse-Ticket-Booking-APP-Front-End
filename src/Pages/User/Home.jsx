import React,{useState} from 'react'
import NavBar from '../../Components/User/NavBar'
import MovieSlide from '../../Components/User/MovieSlide'
import { baseUrl, APIKey, imageUrl } from '../../assets/Constents'
import UpcommingMovie from '../../Components/User/Homepage/upcommingMovie'
import Premiers from '../../Components/User/Homepage/premiers'
import Footer from '../../Components/User/Footer/footer'
const Home = (props) => {
  // console.log(props)
  return (
   <>
     
  
     <MovieSlide />
     <UpcommingMovie/>
     <Premiers/>
     <Footer/>
     
   </>
  )
}

export default Home
