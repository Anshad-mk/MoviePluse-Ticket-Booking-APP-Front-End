import React, { useState,createContext, useContext, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Modal from './Modal'
import { Link, Outlet,Navigate } from 'react-router-dom'
import axios from 'axios'
export const FilterContext = createContext()


const NavBar = () => {
  const [movies, setMovies] = useState([])
  const [filetedMovies, setFilterdMovies] = useState([])
  const [nav, setNav] = useState(false)
  const [state, setState] = useState(false)
  const [query, setQuery] = useState('');
  const usertoken = localStorage.getItem("token")
const [userloggedIn, setUserLoggedIn] = useState(usertoken);
  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    axios.get('http://localhost:4000/Movielist').then((resp) => {
      setMovies(resp.data)
      setFilterdMovies(resp.data)
    })
  }, [])
  useEffect(()=>{
    setUserLoggedIn(usertoken)
  },[userloggedIn])

  function filterMovies(searchTerm) {
    const filtered = movies.filter((movie) =>
      movie.moviename.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterdMovies(filtered);
    

  }
  const handleSearch = (e) => {
    e.preventDefault();
    filterMovies(query);
    
   
  };

  return (
    <div className="bg-[#111827]">
      <div className='bg-black text-white flex justify-between items-center h-20 max-w-[1240] mx-auto px-4 '>
        <Link to={'/'}> <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MOVIE<sup className='text-red-700'>+</sup></h1></Link>

        <div className='hidden md:flex'>
            <form onSubmit={handleSearch}>
  <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search movies..."
                aria-label="Search movies"
                value={query}
                onChange={(e) => {setQuery(e.target.value)
                  setState(e.target.value)}}
                />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
                >
                Search
              </button>
          </div>
                </form>
            
          <ul className='flex '>

            <li className='p-4'>Movies</li>
            <li className='p-4 truncate'>Coming Soon</li>
            <li className='p-4'>About</li>

          </ul>

          <Modal name='login' />
          {/* <button className='truncate bg-[#F80144] hover:bg-red-700 px-2 rounded'>Sign In</button> */}
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>

        <div className={nav ? ' md:hidden fixed left-0 bg-[#F80144]/10 top-0 w-[60%] h-full shadow-2xl ease-in-out duration-300 ' : 'ease-in-out duration-300 fixed left-[-100%] '}>
          <ul className='shadow-2xl pt-24 uppercase text-white  '>

            <li className='p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full'>Movies</li>
            <li className='p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full truncate'>Coming Soon</li>
            <li className='p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full'>About</li>
            <li className='p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full truncate'>Sign In</li>

          </ul>
        </div>


      </div>
      <hr className='' />
      <div>
      <FilterContext.Provider value={{ filteredMovies: filetedMovies }}>
     <Outlet /> 
      {/* { userloggedIn ? <Outlet />: <Navigate to={"/"} /> } */}

    </FilterContext.Provider>
        
      </div>
    </div>
  )
}

export default NavBar
