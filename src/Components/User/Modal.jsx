import GoogleButton from "react-google-button";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "../../assets/axiosForBackend";

const LoginPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  //signup
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlesubmit = async () => {
    try {
      console.log(formData);
      const data = await axios
        .post(
          "/signup",
          { ...formData },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res);
        });
    } catch (error) {}
  };
  //login

  const loginHandleChange = (event) => {
    try {
      const { id, value } = event.target;
      setLoginData({ ...loginData, [id]: value });
    } catch (error) {}
  };

  const LoginHandle = async () => {
    try {
      const data = await axios
        .post(
          "/login",
          { ...loginData },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res);
        });
    } catch (error) {}
  };

  return (
    <>
      <button
        className="px-6 py-3 text-white bg-red-600 rounded-md"
        type="button"
        onClick={() => setIsOpen(true)}>
        Login
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setIsOpen(false);
            setShowRegister(false);
          }}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true">
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {showRegister ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}>
                    <h2 className="text-2xl font-bold mb-4 text-center">
                      Welcome New!
                    </h2>
                    <div className="mb-4">
                      <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={handleInputChange}
                        value={formData.email}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Enter your Number"
                        onChange={handleInputChange}
                        value={formData.phone}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={handleInputChange}
                        value={formData.password}
                        required
                      />
                    </div>
                    <button
                      className="w-full px-4 py-2 text-lg font-bold text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
                      type="submit"
                      onClick={(e) => {
                        setShowRegister(false);
                        handlesubmit();
                      }}>
                      Register
                    </button>
                    <p className="mt-4 text-gray-600 text-center">
                      Already have an account?{" "}
                      <button
                        className="text-red-500 hover:text-red-700 font-bold focus:outline-none"
                        onClick={() => {
                          setShowRegister(false);
                        }}>
                        Login here.
                      </button>
                    </p>
                  </form>
                ) : (
                  // loging.....................................
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}>
                    <h2 className="text-2xl font-bold mb-4 text-center">
                      Welcome Back!
                    </h2>
                    <div className="mb-4">
                      <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={loginHandleChange}
                        value={loginData.email}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={loginHandleChange}
                        value={loginData.password}
                        required
                      />
                    </div>
                    <button
                      className="w-full px-4 py-2 text-lg font-bold text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
                      type="submit"
                      onClick={(e) => {
                        setIsOpen(false);
                        LoginHandle();
                      }}>
                      Login
                    </button>
                    <h2 className="text-2xl font-bold mb-4 text-center mt-2">
                      OR
                    </h2>
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        var decoded = jwt_decode(credentialResponse.credential);
                        if (decoded) {
                          setShowModal(false);
                          setLogname(decoded.given_name);
                        }

                        // var decodedHeader = jwt_decode(credentialResponse.credential, { header: true });
                        // console.log(decodedHeader)
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />

                    <button
                      className="w-full px-4 py-2 text-lg font-bold text-black  rounded-lg focus:outline-none focus:bg-red-700 mt-4"
                      type="submit">
                      Login With OTP
                    </button>
                    <p className="mt-4 text-gray-600 text-center">
                      Don't have an account yet?{" "}
                      <button
                        className="text-red-500 hover:text-red-700 font-bold focus:outline-none"
                        onClick={() => setShowRegister(true)}>
                        Register here.
                      </button>
                    </p>
                  </form>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginPage;
