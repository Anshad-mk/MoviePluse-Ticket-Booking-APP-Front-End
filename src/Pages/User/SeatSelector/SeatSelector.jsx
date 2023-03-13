import React from 'react'
import Moviename from '../../../Components/User/MovieName/Moviename'
import NavBar from '../../../Components/User/NavBar'
import Seatselect from '../../../Components/User/SeatSelect/Seatselect'

function SeatSelector() {
  return (
    <div>
      <NavBar/>
      <Moviename/>
      <Seatselect/>
    </div>
  )
}

export default SeatSelector
