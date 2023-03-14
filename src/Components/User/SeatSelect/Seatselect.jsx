import React, { useEffect, useState } from 'react'
import './seatselect.css'
import FourKIcon from '@mui/icons-material/FourK';
let coulumSeat = [];
let seat = [];

function Seatselect() {
    const [seatcount, setSeatcount] = useState(10)
    const [columCount, setColumncount] = useState(5)
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
    console.log(selectedSeat);

    return (
        <div className='Main-container'>
            <div className="mainMid-container">
                <div className="Mid-container">
                    <div className="seat-container">


                        {coulumSeat.map((value, index) => {
                            return (
                                <div className="column-countainer" key={value}> 
                                    {seat.map((data, index) => {
                                        return <> <button className="Seat" value={value + index} id={value + index} key={value + index} onClick={(event) => { Seatselect(event) }}>{index == 0 &&  value }{ value=='A'  &&  data}</button></>
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
                    <div className="detiales-container border-2 text-white text-center">
                       <div><h1 className='text-white '>Ticket</h1><hr /></div> 
                        
                        <h1>Selected Seats</h1>
                        <h1>
                            {`${selectedSeat}`}
                        </h1> 
                        <button className='bg-[#ffff] text-black px-2 rounded-lg hover:bg-[#b48d8d]'>Book Your Seat</button>

                    </div>
                </div>

            </div>



        </div>
    )
}

export default Seatselect
