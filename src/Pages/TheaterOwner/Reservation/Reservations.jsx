import React, { useEffect, useState } from 'react'
import CinemaAxios from '../../../assets/axiosForCinema'
import ReactPaginate from 'react-paginate'

const ViewReservations = () => {
    const [reservations, setReservations] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [length, SetLength] = useState()
    const itemsPerPage = 8
    useEffect(() => {
        
        CinemaAxios.get('/theater/ReservationMngmnt').then((resp) => {
            setReservations(resp.data)
            SetLength(resp.data.length)
                // console.log(resp.data)
                
                
            }).catch((err)=>{
                console.log(err);
            })
        
    }, [])
    function getCurrentPageData() {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return reservations.slice(startIndex, endIndex);
      }

    return (
        <div className="min-h-screen w-full  flex justify-center items-center ">
           <div className="relative overflow-x-auto shadow-md m-6 rounded-2xl ">
                <table className="w-full text-sm bg-white  ">
                    <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Screen Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium ">
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
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-center">
                        {getCurrentPageData().map((Reservation) => (
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
                                    className=" font-medium text-black w-2/6 "
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
                <ReactPaginate
  pageCount={Math.ceil(reservations.length / itemsPerPage)}
  pageRangeDisplayed={5}
  marginPagesDisplayed={2}
  onPageChange={({ selected }) => setCurrentPage(selected)}
  containerClassName="flex justify-center my-5"
  activeClassName="font-medium bg-blue-700 text-white py-1 px-3"
  pageClassName="font-medium text-gray-500 rounded-md py-1 px-3 mx-1 cursor-pointer hover:text-blue-700 hover:bg-gray-200"
  previousClassName="font-medium text-gray-500 rounded-md py-1 px-3 mx-1 cursor-pointer hover:text-blue-700 hover:bg-gray-200"
  nextClassName="font-medium text-gray-500 rounded-md py-1 px-3 mx-1 cursor-pointer hover:text-blue-700 hover:bg-gray-200"
  breakClassName="font-medium text-gray-500 rounded-md py-1 px-3 mx-1 cursor-pointer hover:text-blue-700 hover:bg-gray-200"
  previousLabel="<<"
  nextLabel=">>"
/>
            </div> 
        </div>
    )

}

export default ViewReservations
