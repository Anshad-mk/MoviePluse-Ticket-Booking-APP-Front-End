import React, { useState, createContext, useContext, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "./Modal";
import { Link, Outlet, Navigate } from "react-router-dom";
import axios from "axios";
export const FilterContext = createContext();
import userAxios from "../../../assets/axiosForUser";

const NavBar = () => {
  const [movies, setMovies] = useState([]);
  const [filetedMovies, setFilterdMovies] = useState([]);
  const [nav, setNav] = useState(false);
  const usertoken = localStorage.getItem("token");
  const [userloggedIn, setUserLoggedIn] = useState(usertoken);

  const [search, setSearch] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearch([]);
          return;
        }
        const response = await userAxios.get("/search", {
          params: { key: key, limit: 5 },
        });
        setSearch(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [key]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    userAxios.get("/Movielist").then((resp) => {
      setMovies(resp.data);
      setFilterdMovies(resp.data);
    });
  }, []);
  useEffect(() => {
    setUserLoggedIn(usertoken);
  }, [userloggedIn]);

  function filterMovies(searchTerm) {
    const filtered = movies.filter((movie) =>
      movie.moviename.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterdMovies(filtered);
  }

  const userToken = localStorage.getItem("token");
  const [token, setToken] = useState(userToken);
  useEffect(() => {
    setToken(userToken);
  }, [token]);

  return (
    <div className="bg-[#111827]">
      <div className="bg-black text-white flex justify-between items-center h-20 max-w-[1240] mx-auto px-4 ">
        <Link to={"/"}>
          {" "}
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">
            MOVIE<sup className="text-red-700">+</sup>
          </h1>
        </Link>

        <div className="hidden md:flex">
          <div className="relative">
            <div className="flex items-center bg-white rounded-md">
              <input
                type="search"
                className="bg-transparent  text-black w-[500px] border-none focus:outline-none py-2 px-2"
                placeholder="Search for movies, events, Plays, Sports and Activities."
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </div>
            {search && search.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-10 bg-white shadow-md max-h-60 overflow-y-auto">
                {search.map((movie) => (
                  <Link to={`/movie/${movie._id}`}>
                    <div
                      className="flex items-center px-2 py-3 cursor-pointer hover:bg-gray-100"
                      key={movie._id}
                    >
                      <div className="w-12 h-16 mr-4">
                        <img
                          className="object-cover w-full h-full"
                          src={movie.poster1}
                        />
                      </div>

                      <div className="text-lg font-medium  text-black">
                        {movie.moviename}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <ul className="flex ">
            <li className="p-4">Movies</li>
            <li className="p-4 truncate">Coming Soon</li>
            <li className="p-4">About</li>
          </ul>

          {token ? (
            <button
              className="px-6 py-3 text-white bg-red-600 rounded-md"
              type="button"
              onClick={() => {
                localStorage.removeItem("token");
                setToken(null);
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                className="px-6 py-3 text-white bg-red-600 rounded-md"
                type="button"
              >
                Login
              </button>
            </Link>
          )}

          {/* <button className='truncate bg-[#F80144] hover:bg-red-700 px-2 rounded'>Sign In</button> */}
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>

        <div
          className={
            nav
              ? " md:hidden fixed left-0 bg-[#F80144]/10 top-0 w-[60%] h-full shadow-2xl ease-in-out duration-300 "
              : "ease-in-out duration-300 fixed left-[-100%] "
          }
        >
          <ul className="shadow-2xl pt-24 uppercase text-white  ">
            <li className="p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full">
              Movies
            </li>
            <li className="p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full truncate">
              Coming Soon
            </li>
            <li className="p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full">
              About
            </li>
            <li className="p-4 shadow-2xl hover:bg-[#F80144] cursor-pointer rounded-full truncate">
              Sign In
            </li>
          </ul>
        </div>
      </div>
      <hr className="" />
      <div>
        <FilterContext.Provider value={{ filteredMovies: filetedMovies }}>
          <Outlet />
          {/* { userloggedIn ? <Outlet />: <Navigate to={"/"} /> } */}
        </FilterContext.Provider>
      </div>
    </div>
  );
};

export default NavBar;
