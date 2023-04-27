import React,{useState} from 'react'
import MovieSlide from '../../../Components/User/Homepage/MovieSlide'
import UpcommingMovie from '../../../Components/User/Homepage/upcommingMovie'
import Premiers from '../../../Components/User/Homepage/premiers'
import Footer from '../../../Components/User/Footer/footer'
import NewRelese from '../../../Components/User/Homepage/newRelease'
const Home = (props) => {
  // console.log(props)
  return (
   <>
     
  
     <MovieSlide />
    <NewRelese/>
     {/* <UpcommingMovie/> */}
     <Premiers/>
     <Footer/>
     
   </>
  )
}

export default Home
