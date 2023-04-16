import React from 'react'
import firebase from '../../../Config/firebase'
import { useNavigate } from 'react-router-dom';



function forgotpassword() {
const navigate = useNavigate()

    function handleClickVerify() {
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        var phoneNumber = "+91" + document.getElementById('phone').value;
        var applicationVerifier = new firebase.auth.RecaptchaVerifier(
          'recaptcha-container'
        );
        var provider = new firebase.auth.PhoneAuthProvider();
        provider.verifyPhoneNumber(phoneNumber, applicationVerifier)
          .then(function (verificationId) {
            var verificationCode = window.prompt('Please enter the verification ' +
              'code that was sent to your mobile device.');
            return firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
          })
          .then(function (phoneCredential) {
            return firebase.auth().signInWithCredential(phoneCredential);
          }).then(()=>{
            navigate('/password')
          })
      }

    return (
        <section className="h-screen justify-center items-center">
            <div className="container mx-auto flex justify-center items-center h-full">
                {/* Form */}
                <div className="md:w-3/4 lg:w-1/2 xl:w-3/5 xl:pl-10 mt-10 md:mt-0">
                    <form onSubmit={(e) => {
                        e.preventDefault
                    }}>
                        <div className="mb-4 mt-6">
                            <input
                                type="text"
                                id="phone"
                                className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                                placeholder="Phone number"
                            />
                        </div>

                        <div className="mb-3 mt-4">

                        </div>
                    </form>
                    <button
                        className="w-full p-3 rounded-lg text-xl text-white bg-red-700" onClick={handleClickVerify}
                    >
                        Send OTP
                    </button>
                    <div id ='recaptcha-container'></div>
                    {/* End Form */}
                </div>
            </div>
        </section>
    )
}

export default forgotpassword
