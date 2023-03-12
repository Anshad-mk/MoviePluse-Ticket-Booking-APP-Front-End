import React, { useEffect, useState } from 'react'
import { baseUrl, APIKey, imageUrl } from '../../assets/Constents'
import axios from '../../assets/axios'

const MovieSlide = (props) => {
    const [movies, setMovies] = useState([{}])
    useEffect(() => {
        axios.get(`${props.links}`).then((resp) => {
        setMovies(resp.data.results)
        
         })

         axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=63d8f97a44d893a550ab1bf23ce2fa64').then((gen)=>{
            console.log(gen.data.name)
         })
    }, [])

    // console.log(props)
    return (

        <div className='flex px-2 overflow-x-scroll overflow-y-hidden scroll-smooth scroll-m-0 scrollbar-hide'>
            {movies.map((movie, index) => {
                return (
                    <div key={index} className='w-[21rem] max-w-[100%] bg-black/10 rounded-xl p-3 text-white m-5 flex flex-col duration-300 cursor-pointer text-xl hover:scale-110'>
                        <img
                            className='max-w-lg self-center rounded-lg h-[286px]'
                            src={"https://image.tmdb.org/t/p/original/" + movie?.poster_path}
                            alt='poster'
                        />
                        <h3 className='my-1'>{movie?.title}</h3>
                        <h3 className='my-1'>⭐{movie?.vote_average}/10</h3>
                    </div>)
            })}
        </div>




    )
}

export default MovieSlide
