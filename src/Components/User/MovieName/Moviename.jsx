import React, { useEffect,useState } from 'react'
import './moviename.css'

const Moviename = (props) => {
    console.log(props,"prooooops")
    const [movie,setMovie] = useState('')
    useEffect(()=>{
        setMovie(props?.data[0])
    },[props])  
    return (
        <div className='text-white p-2'>
           
            <div className=''>
                <h1 className='mb-2 bold font-extrabold text-2xl'>
                {movie?.Movie?.moviename} - {movie?.Movie?.language}
                </h1></div>
            
            <div className=''>
            <p className='border-white-200 rounded-md border inline p-1 text-xs'>
                {movie?.Movie?.genre}
                </p>
                 </div>

        </div>
    )
}

export default Moviename
