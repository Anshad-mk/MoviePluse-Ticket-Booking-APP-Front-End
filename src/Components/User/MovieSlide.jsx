import React, { useEffect, useState, useContext } from "react";
import { baseUrl, APIKey, imageUrl } from "../../assets/Constents";
import axios from "../../assets/axios";
import { Link, Navigate } from "react-router-dom";
import { FilterContext } from "../../Components/User/NavBar";

const MovieSlide = (props) => {
    const { filteredMovies } = useContext(FilterContext);

    const [movies, setMovies] = useState([{}]);
    console.log(filteredMovies);
    useEffect(() => {
        setMovies(filteredMovies);
    }, [filteredMovies]);

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        // console.log(selectedOption)
    };
    return (
        <>
            {/* <select id="options" value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Select--</option>
        <option value="fantasy">fantasy</option>
        <option value="Action">Action</option>
        <option value="Sci-fi">Sci-fi</option>
      </select> */}

            <div className="h-9 w-full mt-10 flex items-center justify-center">
                <h2 className="text-center text-white font-mono font-bold text-xl">ENJOY THE ENTERTAINMENT</h2>
            </div>
            <div className="flex px-2 overflow-x-scroll overflow-y-hidden scroll-smooth scroll-m-0 scrollbar-hide">
                {movies.map((movie, index) => {
                    return (
                        <div
                            key={index}
                            className="max-w-[100%] bg-black/10 rounded-xl p-3 text-white m-5 flex flex-col duration-300 cursor-pointer text-xl hover:scale-110"
                            onClick={() => { }}
                        >
                            <Link to={`/movie/${movie._id}`}>
                                <img
                                    className="max-w-lg self-center rounded-lg w-[150px]  h-[286px]"
                                    src={movie.poster1}
                                    alt="poster"
                                />
                                {/* {console.log(movie)} */}
                                <h3 className="my-1">{movie?.moviename}</h3>
                                <h3 className="my-1">⭐{movie?.genre}</h3>
                                {/* <p className='truncate'>{movie.description}</p> */}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default MovieSlide;
