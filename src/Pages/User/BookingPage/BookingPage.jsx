import React from 'react'
import Moviename from '../../../Components/User/MovieName/Moviename'
import NavBar from '../../../Components/User/NavBar'
import TabPanel from '../../../Components/User/DatePicker/DatePicker'
import AvailableTheater from '../../../Components/User/AvailableTheater/AvailableTheater'

function BookingPage() {
  return (
    <div>
        <NavBar/>
        <Moviename/>
        <TabPanel />
        <AvailableTheater/>
      
    </div>
  )
}

export default BookingPage
