import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Modal from './Modal'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
            <>
        <div className='bg-black text-white flex justify-between items-center h-20 max-w-[1240] mx-auto px-4 '>
            <Link to={'/'}> <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MOVIE<sup className='text-red-700'>+</sup></h1></Link>

            <div className='hidden md:flex'>
                <ul className='flex '>

                    <li className='p-4'>Movies</li>
                    <li className='p-4 truncate'>Coming Soon</li>
                    <li className='p-4'>About</li>

                </ul>
                <Modal name='login' />
                {/* <button className='truncate bg-[#F80144] hover:bg-red-700 px-2 rounded'>Sign In</button> */}
            </div>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <FaBars size={20} /> :<FaTimes size={20}/>}
            </div>

            <div className={nav ? ' md:hidden fixed left-0 bg-[#F80144]/10 top-0 w-[60%] h-full shadow-2xl ease-in-out duration-300 ': 'ease-in-out duration-300 fixed left-[-100%] '}>
                <ul className='shadow-2xl pt-24 uppercase text-white  '>

                    <li className='p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full'>Movies</li>
                    <li className='p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full truncate'>Coming Soon</li>
                    <li className='p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full'>About</li>
                    <li className='p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full truncate'>Sign In</li>

                </ul>
            </div>
         

        </div>
        <hr className='' />
        </>
    )
}

export default NavBar
