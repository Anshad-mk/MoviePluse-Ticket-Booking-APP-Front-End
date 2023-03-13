import React from 'react'
import './moviename.css'

const Moviename = () => {
    let Movie ={name:"Seetha Ramam",Language:"Malayalam"}
    let genresname =["Action","Sci-Fi","Drama","Romance"]
    return (
        <div className='movieName'>
            <div className='moviename'><h2>{Movie.name} - {Movie.Language}</h2></div>
            
            <div className='genres'>
            {genresname.map((name,index) =>{
                return <p className='genresname' key={index}>{name}</p>
 
            })}
               
               </div>

        </div>
    )
}

export default Moviename
