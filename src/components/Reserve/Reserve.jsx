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
    </div>
  );
}
export default Reserve;