import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const viewtheaters = () => {
  const [Theaters, setTheater] = useState([])
  const [accept,setAccept]=useState(false)

  useEffect(() => {
    axios.get('http://localhost:4000/admin/TheaterReview')
      .then((response) => {
        console.log(response.data,"data")
        setTheater(response.data)
        // setAccept()
      })
      
  }, [])

    function authorisetheater (theater,status,index) {
    axios.patch('http://localhost:4000/admin/accept',{...theater,status}).then((resposne) => {
      const updatedTheaters = Theaters.map((value) => {
        if (value.email === theater.email) {
          return { ...value, accepted: status };
        }
        return value;
      });
      setTheater(updatedTheaters)
      
    });
  }

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="relative overflow-x-auto ">
          <table className="text-sm text-left text-white rounded-2xl">
            <thead className="text-xs uppercase bg-gray-500 dark:bg-gray-400 text-center text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Place
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {Theaters.map((theater, index) => (
                <tr key={index} className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {theater.email}
                  </th>
                  <td className="px-6 py-4 text-black font-medium">
                    {theater.place}
                  </td>
                  <td className="px-6 py-4 items-center flex justify-center">
                    {theater.accepted ? (<button 
                      type="button"
                      className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  disabled:opacity-25" disabled
                       > ACCEPT </button>) :(<button 
                        type="button"
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  " 
                        onClick={() =>{
                           authorisetheater(theater,true,index)
                         
                          }
                          
                        }
                         >ACCEPT </button>)}
                      
                    {theater.accepted ? (<button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
                       onClick={() => {
                        authorisetheater(theater,false,index)
                       
                      }}
                      >
                      REJECT
                    </button>):<button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-25" disabled
                      >
                      REJECT
                    </button>}
                    
                    
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

export default viewtheaters
