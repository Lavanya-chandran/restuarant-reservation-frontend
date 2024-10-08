import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React from 'react';


function Signup({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function ChangeHandler(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.email]: event.target.value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://restuarant-reservation-backend-z4g6.onrender.com/people/create-people",)
      .then((res) => {
        if (res.status === 200) {
          navigate("/login")
        }
          // setIsLoggedIn(true);
        else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
    navigate("/login")
  };

  
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <img
        className="h-full w-full lowbrightness object-cover z-[-1] fixed top-0"
        src="https://wallpaperaccess.com/full/3353916.jpg"
        alt=""
      />
      <div className="w-full glassmorphism rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="flex flex-col p-6 sm:p-8">
          <h1 className="text-3xl font-bold mx-auto leading-tight tracking-tight md:text-2x text-white">
            Create Account
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-md font-medium text-white "
              >
                Your email
              </label>
              <input
                // defaultValue={props.emailValue}
                // onChange={(event) => setEmail(event.target.value)}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                // className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                className="border text-base font-semibold rounded-lg block w-full p-2.5 forminput"
                placeholder="name@mail.com"
                required
                onChange={ChangeHandler}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block mb-2 text-md font-medium text-white"
              >
                Password
              </label>
              <input
                // defaultValue={props.passwordValue}
                // onChange={(event) => setPasswword(event.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={formData.password}
                // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                className="border text-base font-semibold rounded-lg block w-full p-2.5 forminput"
                required
                onChange={ChangeHandler}
              />
            </div>

            {/* <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the Terms and Conditions
                </label>
              </div>
            </div> */}
            
            <button type="submit" className="reservebtn text-lg text-white font-medium rounded-lg px-5 py-2.5 mt-10 md:mt-4 mb-20 md:mb-8">
              Signup
            </button>

        {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p> */}
      </form>
    </div>
      </div >
    </div >
  );
}

export default Signup;