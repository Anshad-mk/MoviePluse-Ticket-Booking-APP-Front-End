import React, { useEffect, useState } from 'react'
import CinemaAxios from '../../../assets/axiosForCinema'
import ReactPaginate from 'react-paginate'
const ViewScreens = () => {
    const [screen, setScreen] = useState([])
    const token = localStorage.getItem('Cinematoken')
    const [currentPage, setCurrentPage] = useState(0)
  const [length, SetLength] = useState()
  const itemsPerPage = 5
    useEffect(() => {
        
        CinemaAxios.get('/theater/view-screen').then((resp) => {
                setScreen(resp.data.screens)
                SetLength(resp.data.screens.length)
                // console.log(resp.data.screens)
                
                
            }).catch((err)=>{
                console.log(err);
            })
        
    }, [])
    function getCurrentPageData() {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return screen.slice(startIndex, endIndex);
      }
    return (
        <div className="h-full min-h-screen pb-4 w-full p-0 m-0 flex justify-center items-center">
            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm bg-white rounded-2xl overflow-hidden">
                    <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Screen Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Screen Type
                            </th>

                            <th scope="col" className="px-6 py-3 font-medium">
                                Row Count
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Column Count
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Totel Capacity
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {getCurrentPageData().map((s) => (
                            <tr
                                key={s._id}
                            >
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                                >
                                    {s.name}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {s.screen_type}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {s.row}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {s.column}
                                </td>
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                                >
                                    {s.seating_capacity}
                                </td>
                                <td className="px-6 py-4 items-center flex justify-center gap-4">
                                    <button
                                        type="button"
                                        className="text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                    >
                                        Block
                                    </button>
                                    {/* edit */}
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(s._id)}
                                        className="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ReactPaginate
  pageCount={Math.ceil(screen.length / itemsPerPage)}
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

export default ViewScreens
