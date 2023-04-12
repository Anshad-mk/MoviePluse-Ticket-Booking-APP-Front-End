import React, { useEffect, useState } from 'react'
import Moviename from '../../../Components/User/MovieName/Moviename'
// import NavBar from '../../../Components/User/NavBar'
import TabPanel from '../../../Components/User/DatePicker/DatePicker'
import AvailableTheater from '../../../Components/User/AvailableTheater/AvailableTheater'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function BookingPage() {
  const [show, setShow] = useState('')
  const { MovieId } = useParams()
 const [bookingDate,setBookingDate] = useState(new Date())

 function currentDate (value){
    setBookingDate(value)
 }
  
 
  useEffect(() => {
    axios.get(`http://localhost:4000/findShow/${MovieId}`).then((resp) => {
      setShow(resp.data)

    })

  }, [])

  return (

    <div>

      <Moviename data={show} />
      <TabPanel data={show} fn={currentDate}/>
      <AvailableTheater data={show} date={bookingDate} />

    </div>
  )
}

export default BookingPage
