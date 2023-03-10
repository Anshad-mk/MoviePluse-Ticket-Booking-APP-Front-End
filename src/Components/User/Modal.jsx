import React, { useState } from "react";
import GoogleButton from 'react-google-button'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from "jwt-decode";
export default function Modal(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [logName,setLogname]= useState(props.name)
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                {logName}
            </button>
            {showModal ? (
                <>
                    <div
                        className=" text-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl font-semibold">
                                        Log in
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    {/* <GoogleButton /> */}
                                    <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            console.log(credentialResponse);
                                            var decoded = jwt_decode(credentialResponse.credential)
                                            if(decoded){
                                                setShowModal(false)
                                                setLogname(decoded.given_name)
                                            }
                                            console.log(decoded)
                                            // var decodedHeader = jwt_decode(credentialResponse.credential, { header: true });
                                            // console.log(decodedHeader)
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    />

                                </div>
                                {/* <div>
                                    <span>Enter Your Phone Number</span>
                                    <br />
                                    <input type="text" placeholder="Mobile Number" className="border-2 border-gray-900 rounded-lg" />
                                </div> */}
                                {/*footer*/}

                                {/* <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>  */}
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Log in
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}