import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import NavBar from '../../Components/User/NavBar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './singlemoviepage.css';
import axios from 'axios';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function valuetext(value) {
  return `${value}°C`;
}


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicGrid() {
  const [movie, SetMovie] = useState('')

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:4000/Movie/${id}`).then((resp) => {
      SetMovie(resp.data)
      console.log(resp.data)
    })
  }, [])

  // const movieData = {
  //   title: 'The Marvel Series',
  //   releaseDate: '12/03/2001',
  //   Director: 'Peter John',
  //   genres: ['Action', 'Sci-Fi'],
  // }

  const castDetails = [
    {
      name: 'Ram K Das',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGk0XDPwd63cdXVsxCfKxTn-gEos2wz-A0ocfU8OhTLltxMbuiTRxz35d0TqxUJ0XAFcPTekABTww&usqp=CAU&ec=48600113',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
  ]

  return (
    <>
      <div className="mx-auto p-8 items-center justify-center">
        <div className="bg-white p-8 rounded-lg mb-8 items-center justify-center">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {movie.moviename}
          </h1>
          {/* <div className='text-center'></div> */}
          <img
            src={movie.poster2}
            alt=""
            className="mx-auto block mb-8 rounded-lg text-center  lg:max-w-screen-lg"
          />
          <p className="text-gray-600 mb-4 flex  items-center text-center"> {movie.description}

          </p>
          <div className="text-center">
          <h1 className="font-bold text-2xl uppercase">Details</h1>
          <div className="text-center">
            <h5 className='"text-gray-600 mb-4 mt-6 items-center text-center'>
              Language :{movie.language}
            </h5>
            <h5 className='"text-gray-600 mb-4 mt-6 items-center text-center'>
              Genre :{movie.genre}
            </h5>
            <h5 className='"text-gray-600 mb-4 mt-6 items-center text-center'>
              {/* Release Date :{movie.releasedate} */}
            </h5>
          </div>
        </div>
          <div className="flex mx-auto items-center justify-center gap-6">
          <Link to={`/SelectTheater/${movie._id}`}> <button
              className="px-6 py-3 w-64 text-white bg-red-600 rounded-md"
              type="button"
            >
              Book
            </button></Link>
            <button
              className="px-6 py-3 w-64 text-white bg-red-600 rounded-md"
              type="button"
            >
              Trailer
            </button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Cast & Crew</h2>
          <div className="grid grid-cols-6 gap-5 items-center justify-center">
            {castDetails.map((cast,index) => (
              <div key={index}  className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGk0XDPwd63cdXVsxCfKxTn-gEos2wz-A0ocfU8OhTLltxMbuiTRxz35d0TqxUJ0XAFcPTekABTww&usqp=CAU&ec=48600113"
                  alt=""
                  className="mb-4 rounded-full w-24 h-20 object-cover items-center justify-center mx-auto"
                />
                <h3 className="text-md font-bold mb-2 w-24 items-center justify-center mx-auto">
                  {cast.name}
                </h3>
                <p className="text-gray-600 text-center mx-auto">
                  {cast.position}
                </p>
              </div>
            ))}
          </div>
        </div>
        <h2 className='mt-12 text-center font-bold text-xl'>UPCOMMING MOVIES</h2>
        {/* <MovieSlide></MovieSlide> */}
      </div>
    </>
  );
}
