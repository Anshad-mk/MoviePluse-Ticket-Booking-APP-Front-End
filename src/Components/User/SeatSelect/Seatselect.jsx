import React, { useEffect, useState } from 'react'
import './seatselect.css'
import FourKIcon from '@mui/icons-material/FourK';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';

let coulumSeat = [];
let seat = [];
const token = localStorage.getItem('token')
function Seatselect() {
    const navigate = useNavigate()

    function reservation(seat,data){
        
        if(selectedSeat.length<=0){
            swal({
                title: "Select Seat first!",
                text: "Minimum One Seat!",
                icon: "warning",
                
                dangerMode: false,
              })
              
        }else{
            if(!token){
                swal({
                    title: "Log Error",
                    text: "you should log in first!",
                    icon: "warning",
                    dangerMode: false,
                  })
               
            }else{
                
            }
            axios.post('http://localhost:4000/seatbook',
        {
             show: {
                date:new Date(data.date),
                time:data.time,
                SeatNumber:seat,
                price:data.Screen.TicketPrice,
                TotelPrice:seat.length*data.Screen.TicketPrice
              },
              movie:data.Screen.Movie,
              theater: data.Screen.theater
            
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }


        }
        ).then((resp)=>{
            swal({
                title: "success",
                text:`${seat} Booked successfully`,
                icon: "success",
                dangerMode: false,
              }).then(()=>{
                navigate('/')
              }) 
        })
        }

        
    }

    const { state } = useLocation()
    
    const [data, setData] = useState(state)
    
    const [seatcount, setSeatcount] = useState(data.Screen.theater.screen.row)
    const [columCount, setColumncount] = useState(data.Screen.theater.screen.column)

    useEffect(() => {
        setData(state)
        setSeatcount(data.Screen.theater.screen.row)
        setColumncount(data.Screen.theater.screen.column)
    }, [state, seatcount, columCount])

    for (let i = 0; i < seatcount; i++) {
        seat[i] = i
    }
    for (let j = 0; j < columCount; j++) {
        coulumSeat[j] = String.fromCharCode(65 + j)
    }
    const [selectedSeat, setSelectedSeat] = useState([])
    const Seatselect = (event) => {
        if (event.currentTarget.style.backgroundColor === 'red') {
            event.currentTarget.style.backgroundColor = 'white'
        } else {
            event.currentTarget.style.backgroundColor = 'red'
        }
        if (!selectedSeat.includes(event.target.value)) {
            setSelectedSeat([...selectedSeat, event.target.value])
        } else {
            setSelectedSeat(selectedSeat.filter((val) => val !== event.target.value))
        }
    }
    

    return (
        <div className='Main-container'>
            <div className="mainMid-container">
                <div className="Mid-container">
                    <div className="seat-container">
                         {coulumSeat.map((value, index) => {
                            return (
                                <div className="column-countainer" key={value}>
                                    {seat.map((data, index) => {
                                        return  <button className="Seat" value={value + index} id={value + index} key={value + index} onClick={(event) => { Seatselect(event) }}>{index == 0 && value}{value == 'A' && data}</button>
                                    })}
                                </div>
                            )
                        })}
                        <div className="Screen-container">
                            <FourKIcon sx={{ fontSize: 60 }} />
                            Screen
                            <div className="theater"></div>
                        </div>
                    </div>
                    <div className="mr-10 detiales-container border-2 text-white text-center">
                        <div><h1 className='text-white '><span className='text-[#29fadede] text-3xl '>{data?.Screen?.Movie?.moviename} - {data.Screen.Movie.language}</span> </h1><hr /></div>
                        <h1 className='mt-8'>{ data?.date.toLocaleDateString() } - {data?.time}</h1>

                        <h1 className='mt-3'>Selected Seats</h1>
                        <h1 className='mt-3'>
                            {`${selectedSeat}`}
                        </h1>
                        {selectedSeat.length >0 ? (<h2 className='mt-3 mb-3'>{data?.Screen?.TicketPrice} * {selectedSeat.length} = {selectedSeat.length*data?.Screen?.TicketPrice}</h2>):null}
                        <button onClick={()=>{
                            reservation(selectedSeat,data)
                        }} className='bg-[#ffff] text-black px-2 rounded-lg hover:bg-[#b48d8d]'>Book Your Seat</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seatselect
