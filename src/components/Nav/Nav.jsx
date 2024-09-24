import { Link } from "react-router-dom";
import logoGif from "../logo/nav.gif";
import "../../App.css";
import { FaRegCircleUser } from "react-icons/fa6";

function Nav() {
  return (
    <nav className="mx-5 md:mx-14 border-b-2 bg-transparent text-slate-100 border-gray-300 dark:bg-transparent">
      <div className="flex flex-wrap items-center justify-between p-2">
        <Link to="/" className="font-bold text-4xl">
          <img src={logoGif} alt="Logo" className="h-14 w-30 md:h-20 md:w-35" />
        </Link>
        <div className="text-xs flex flex-row p-0 md:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:font-medium md:text-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent dark:border-gray-700">
          <Link
            to="/"
            className="block py-2 px-3 font-semibold text-md rounded md:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
            </svg>
          </Link>
          <Link
            to="/about"
            className="block py-2 px-3 font-semibold text-md rounded md:bg-transparent"
          >
            About
          </Link>
          <Link
            to="/Signup"
            className="block py-2 px-3 font-semibold text-md rounded bg-transparent md:bg-transparent"
          >
            Signup
          </Link>
          <Link
            to="/reserve"
            className="block py-2 px-3 font-semibold text-md rounded bg-transparent md:bg-transparent"
          >
            Restaurants
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-3 font-semibold text-md rounded bg-transparent md:bg-transparent"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className=" py-2 px-3 text-md rounded bg-transparent md:bg-transparent"
          >
          <FaRegCircleUser />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;