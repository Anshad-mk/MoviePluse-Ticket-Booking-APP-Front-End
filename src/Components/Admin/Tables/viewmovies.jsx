import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import EditModal from '../../../Components/Admin/Tables/ModelEditMovie'

const   viewmovies = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/admin/allMovies').then((resp) => {
      console.log(resp.data)
      setMovies(resp.data)
    })
  }, [])

  return (
    <>
      <div className=" mt-10 flex justify-center items-center ">
        <div className="relative overflow-x-auto ">
          <table className="text-sm text-left text-white rounded-2xl">
            <thead className="text-xs uppercase bg-gray-500 dark:bg-gray-800 text-center text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Movie name
                </th>
                <th scope="col" className="px-6 py-3">
                  release date
                </th>
                <th scope="col" className="px-6 py-3">
                  Genre
                </th>
                <th scope="col" className="px-6 py-3">
                  language
                </th>
                <th scope="col" className="px-6 py-3">
                  Trailer link
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr className="bg-white border-b" key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  dark:text-black"
                  >
                    {movie.moviename}
                  </th>

                  <td className="px-6 py-4 text-black font-medium">{movie.description}</td>
                  <td className="px-6 py-4 text-black font-medium">{movie.language}</td>
                  <td className="px-6 py-4 text-black font-medium">{movie.releasedate}</td>
                  <td className="px-6 py-4 items-center flex justify-center">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Block
                    </button>
                    {/* <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                    </button> */}
                      <EditModal movie={movie} />
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default viewmovies
