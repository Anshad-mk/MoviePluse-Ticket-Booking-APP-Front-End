import React from 'react'
import './availabletheater.css'
import { Link } from 'react-router-dom'
const AvailableTheater = () => {
    return (
        <div className='Main-Container w-f m-0 p-3'>
            <div className='active-fill'>
                 <p className='status-indicaters'>Available</p>
                <p className='status-indicaters'>Fast Filling</p>
                <p className='status-indicaters'>Subtitle</p>
                
            </div>
            <hr className='pt-3 ' />
            <div className="Theater-container ">
                
                <div className="theater-Name-container ">
                    <h5 className='pe-3 m-0' >Theater Name</h5>
                    <p className=' m-0'>INFO</p>
                </div>
                <div className="Time-button">
                    <Link to={'/movieseat'} className='text-decoration-none'><button className='btn bg-black text-white rounded-lg px-4 mx-1'>03:45</button></Link> 
                    <Link to={'/movieseat'} className='text-decoration-none'><button className='btn bg-black text-white rounded-lg px-4 mx-1'>03:45</button></Link> 
                    <Link to={'/movieseat'} className='text-decoration-none'><button className='btn bg-black text-white rounded-lg px-4 mx-1'>03:45</button></Link> 
                    
                </div>
            </div>
            <hr className='pt-3 mt-3' />
            <div className="Theater-container">
                
                <div className="theater-Name-container">
                    <h5 className='pe-3 m-0' >Theater Name</h5>
                    <p className=' m-0'>INFO</p>
                </div>
                <div className="Time-button">
                <Link to={'/movieseat'} className='text-decoration-none'><button className='btn bg-black text-white rounded-lg px-4 mx-1'>03:45</button></Link> 
                    <Link to={'/movieseat'} className='text-decoration-none'><button className='btn bg-black text-white rounded-lg px-4 mx-1'>03:45</button></Link> 
                    <Link to={'/movieseat'} className='text-decoration-none'><button className='btn bg-black text-white rounded-lg px-4 mx-1'>03:45</button></Link> 
                    
                </div>
            </div>
        </div>
    )
}

export default AvailableTheater
