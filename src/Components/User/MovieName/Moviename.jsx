import React, { useEffect,useState } from 'react'
import './moviename.css'

const Moviename = (props) => {
    const [movie,setMovie] = useState(props.data)
    useEffect(()=>{
        setMovie(props.data[0])
    },[])   
        console.log(movie,"jhaskdhfajks")  
  
   
    return (
        <div className='movieName'>
            <div className='moviename'><h2>
                {/* {movie?.moviename} - {movie?.language} */}
                </h2></div>
            
            <div className='genres'>
            <p className='genresname'>
                {/* {movie?.genre} */}
                </p>
                 </div>

        </div>
    )
}

export default Moviename
