import React, { useEffect, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

const token = localStorage.getItem('Cinematoken')
const viewmovies = () => {
    const [shows, setShows] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/theater/show-Screened-Movies',
            {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((showlists) => {
                setShows(showlists.data)
            }).catch((err) => console.log(err))

    }, [])

    const handleDelete = (index) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this Show!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            fetch(`url`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((response) => {
                if (response.ok) {
                  const updatedUsers = allUsers.filter((user) => user._id !== id);
                  setAllUsers(updatedUsers);
                } else {
                  console.error('Error deleting user')
                  alert('Error deleting user')
                }
              })
              .catch((error) => {
                console.error(error)
                alert('Error deleting user')
              })
            swal("User has been deleted!", {
              icon: "success",
            });
          } else {
            swal("User deletion cancelled!");
          }
        });
      }

    return (
        <div className="p-0 m-2 flex justify-center items-center">
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm bg-white rounded-2xl overflow-hidden">
                    <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Screen Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Seat-Capacity
                            </th>

                            <th scope="col" className="px-6 py-3 font-medium">
                                Movie Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Movie Poster
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                TicketPrice
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                startDate
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                EndDate
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {shows.map((value, index) => (
                            <tr className='text-black'
                                key={index}
                            >
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                                >
                                    {value.theater.screen.name}

                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {value.theater.screen.seating_capacity}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {value.Movie.moviename}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    <img height={50} width={50} src={value.Movie.poster1} alt="" />
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {value.theater.screen.screen_type}

                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {value.TicketPrice}

                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {value.startDate.split('T')[0]}

                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {value.EndDate.split('T')[0]}

                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    <button
                                        type="button"
                                        className="text-white focus:ring-4 bg-green-700 hover:bg-green-800  w-20  hover:ring-red-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        Edit
                                    </button> <br />
                                    <button
                                        type="button" onClick={()=>{
                                            handleDelete("4")
                                        }}
                                        className="text-white focus:ring-4 bg-red-700 hover:bg-red-800  w-20  hover:ring-red-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        delete                                       
                                    </button>

                                   
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default viewmovies