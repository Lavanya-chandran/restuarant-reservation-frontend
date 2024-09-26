import React from "react";

import { NavLink } from "react-router-dom";

const Item = (props) => {
  return (
    <>
      <NavLink
        to="/booking"
        key={"booking"}
        state={{
          image: props.image,
          id: props.id,
          Resname: props.name,
          description: props.description,
          rating: props.rating,
          Reslocation: props.location,
          price: props.price,
          menu:props.menu
        }}
      >
        <div className="rounded overflow-hidden shadow-lg glassmorphism my-8 cursor-pointer card-effect">
          <img
            className="h-[200px] w-[2001px] object-cover"
            src={props.image}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="flex justify-between">
              <div className="font-thin text-xl mb-2 text-slate-100">
                {props.name}
              </div>
              <div className="font-thin text-sm mb-2 text-slate-100">
                {props.price}
              </div>
            </div>
            <p className="text-md font-light text-slate-100">
              {props.description}
            </p>
          </div>
          <div className="px-4 pb-2 flex justify-between">
            <span className="inline-block h-8 relative border item-enhance rounded-full p-4 text-sm font-semibold text-gray-50 mr-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill absolute star-position"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
            <span className="inline-block border item-enhance rounded-full px-4 py-2 text-sm font-semibold text-gray-50 mr-2 mb-2">
              {props.rating}
            </span>
            <span className="inline-block border item-enhance rounded-full px-4 py-2 text-sm font-semibold text-gray-50 mr-2 mb-2">
              {props.location}
            </span>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Item;