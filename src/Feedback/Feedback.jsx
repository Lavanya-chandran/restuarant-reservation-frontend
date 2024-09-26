import { Typography, Avatar, Rating } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function Feedback() {
  const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://restuarant-reservation-backend-z4g6.onrender.com/review/")
      .then((res) => {
        if (res.status === 200) {
          alert("feedback submitted");
          navigate("/feedback")
        }
          // setIsLoggedIn(true);
        else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <img
        className="h-full w-full lowbrightness object-cover z-[-1] fixed top-0"
        src="https://wallpaperaccess.com/full/3353916.jpg"
        alt=""
      />
      <div className="w-full rating rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="flex flex-col p-6 sm:p-8">
          <h1 className="text-3xl font-bold mx-auto leading-tight tracking-tight md:text-2x text-white">
            Feedback Form
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-md font-medium text-white "
              >
                Your name
              </label>
              <input
                // defaultValue={props.emailValue}
                // onChange={(event) => setEmail(event.target.value)}
                type="username"
                name="username"
                id="username"
  
                // className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                className="border text-base font-semibold rounded-lg block w-full p-2.5 forminput"
                placeholder="your name"
                required
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="comments"
                className="block mb-2 text-md font-medium text-white"
              >
              Comments
              </label>
              <input
                // defaultValue={props.passwordValue}
                // onChange={(event) => setPasswword(event.target.value)}
                type="Comments"
                name="Comments"
                id="Comments"
                placeholder="your comments"
                required
                // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                className="border text-base font-semibold rounded-lg block w-full p-2.5 forminput"
              />
            </div>
           <div className="mt-4">
              <label
                htmlFor="rating"
                className="block mb-2  star text-md font-medium text-white"
              >
              Rating
              </label>
              <input
                // defaultValue={props.passwordValue}
                // onChange={(event) => setPasswword(event.target.value)}
                type="rating"
                name="rating"
                id="rating"
                placeholder="your rating "
                required
                // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                className="border text-base font-semibold rounded-lg block w-full p-2.5 forminput"
              />
            </div>
            <button type="submit" className="reservebtn text-lg text-white font-medium rounded-lg px-5 py-2.5 mt-10 md:mt-4 mb-20 md:mb-8">
              Submit
            </button>

        {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p> */}
      </form>
  </div>
  </div>
  </div>
  );
}
export default Feedback;