import React from "react";
import firebase from "../../../Config/firebase";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import swal1 from "sweetalert";
import UserAxios from "../../../assets/axiosForUser";

function forgotpassword() {
  const navigate = useNavigate();

  function handleClickVerify() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    var phoneNumber = "+91" + document.getElementById("phone").value;
    var applicationVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    var provider = new firebase.auth.PhoneAuthProvider();
    provider
      .verifyPhoneNumber(phoneNumber, applicationVerifier)
      .then(async (verificationId) => {
        document.getElementById("otp").hidden = false;
        let otp = await document.getElementById("otp").value;
        firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
      })
      .then((phoneCredential) => {
        firebase
          .auth()
          .signInWithCredential(phoneCredential)
          .catch((error) => {
            swal.fire({
              title: "Error",
              text: "Verification code is incorrect",
              icon: "error",
              confirmButtonText: "OK",
            });
            throw error;
          });
      })
      .then((resp) => {
        console.log(firebase);
        let verifyPhoneNumber = {
          verified: true,
          number: phoneNumber,
        };
        UserAxios.post("/verifyNumber", {
          ...verifyPhoneNumber,
        })
          .then((resp) => {
            console.log(resp, "resppppppppppp");
            if (resp.data.verified) {
              swal1({
                title: "success",
                text: `Verified successfully`,
                icon: "success",
                dangerMode: false,
              }).then(() => {
                navigate("/login");
              });
            }
          })
          .catch((err) => {
            console.log(err, "errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
          });
        // navigate("/password");
      })
      .catch(function (error) {
        console.error(error, "Error/////////////////////////////");
        console.log(error);
      });
  }

  return (
    <section className="h-screen justify-center items-center">
      <div className="container mx-auto flex justify-center items-center h-full">
        {/* Form */}
        <div className="md:w-3/4 lg:w-1/2 xl:w-3/5 xl:pl-10 mt-10 md:mt-0">
          <form
            onSubmit={(e) => {
              e.preventDefault;
            }}
          >
            <div className="mb-4 mt-6">
              <input
                type="text"
                id="phone"
                className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                placeholder="Phone number"
              />
            </div>

            <div className="mb-3 mt-4"></div>
          </form>
          <div className="mb-4 mt-6">
            <input
              type="text"
              id="otp"
              hidden
              className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
              placeholder="OTP"
            />
          </div>
          <button
            className="w-full p-3 rounded-lg text-xl text-white bg-red-700"
            onClick={handleClickVerify}
          >
            Send OTP
          </button>

          <div className="text-center" id="recaptcha-container"></div>
          {/* End Form */}
        </div>
      </div>
    </section>
  );
}

export default forgotpassword;
