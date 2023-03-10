import React from 'react'
import NavBar from '../../Components/User/NavBar'
import MovieSlide from '../../Components/User/MovieSlide'
import { baseUrl, APIKey, imageUrl } from '../../assets/Constents'
import { links } from '../../assets/Constents'

const Home = () => {

  return (
   <>
     <NavBar />
     <MovieSlide links={links.action}/>
     <MovieSlide links={links.originals}/>
     <MovieSlide links={links.ComedyMovies}/>
   </>
  )
}

export default Home
