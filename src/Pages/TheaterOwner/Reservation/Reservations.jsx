import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CinemaAxios from '../../../assets/axiosForCinema'
const ViewReservations = () => {
    const [reservations, setReservations] = useState([])
    useEffect(() => {
        
        CinemaAxios.get('/theater/ReservationMngmnt').then((resp) => {
            setReservations(resp.data)
                console.log(resp.data)
                
                
            }).catch((err)=>{
                console.log(err);
            })
        
    }, [])


    return (
        <div className="h-auto w-full p-0 m-0 flex justify-center items-center mb-4">
           <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm bg-white rounded-2xl overflow-hidden">
                    <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Screen Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Seat
                            </th>

                            <th scope="col" className="px-6 py-3 font-medium">
                                Movie
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                payment
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Payment status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {reservations.map((Reservation) => (
                            <tr
                                key={Reservation._id}
                            >
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                                >
                                    {Reservation.theater.screen.name}
                                </td>
                                <td
                                    scope="row"
                                    className=" font-medium text-black truncate "
                                >
                                    {Reservation.show.SeatNumber.map(seat=> seat + ", " )}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {Reservation.movie.moviename}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {Reservation.CompletPayment ? "Success" :"Not Completed"}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {Reservation.BookingDate.split("T")[0]}
                                </td>
                                <td className="px-6 py-4 items-center flex justify-center gap-4">
                                    {/* <button
                                        type="button"
                                        className="text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                    >
                                        Block
                                    </button> */}
                                    {/* edit */}
                                    {/* <button
                                        type="button"
                                        onClick={() => handleDelete(Reservation._id)}
                                        className="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                    >
                                        Delete
                                    </button> */}
                                    {Reservation.user.email.split("@")[0]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        </div>
    )

}

export default ViewReservations
