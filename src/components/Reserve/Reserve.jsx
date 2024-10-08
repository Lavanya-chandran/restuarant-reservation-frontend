import Item from "../Item/Item";
import data from "../Asset/data";
import loadingGif from "../logo/loading.gif";
import { Link } from "react-router-dom";
import React from 'react';

function Reserve({ isLoggedIn }) {
  return (
    <div className="flex flex-col">
      <img
        className="h-full w-full lowbrightness2 object-cover z-[-1] fixed top-0"
        src="https://wallpapercave.com/wp/wp1874173.jpg"
        alt=""
      />
      <h1 className="text-3xl md:text-5xl font-bold text-center my-20 md:my-6 text-slate-100">
        Select Your Delight!
      </h1>
      {!isLoggedIn && (
        <div className="mx-auto flex flex-col">
          
          <h1 className="mx-auto text-white font-bold text-2xl">
            Haven't Logged In?
          </h1>
          <Link to="/Signup" className="mx-auto">
            <button className="reservebtn text-lg text-white font-medium rounded-lg px-5 py-2.5 mt-10 md:mt-4 mb-20 md:mb-8">
              Log In
            </button>
          </Link>
        </div>
      )}

      {isLoggedIn && (
        <div className="text-slate-100 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 font-bold gap-6 mx-16">
          {data.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                rating={item.rating}
                location={item.location}
                price={item.price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Reserve;