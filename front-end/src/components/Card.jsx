import React from "react";

export const Card = ({item}) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="card bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white max-w-80 shadow-md hover:shadow-xl hover:scale-105 duration-300 dark:border-white dark:border-[1px]">
          <figure>
            <img
              src={item.image}
              alt="Book"
              className="object-cover w-96 h-64"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary bg-purple-600">{item.catagory}</div>
            </h2>
            <p className="text-wrap">{item.title.slice(0,25)}...</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline cursor-pointer hover:bg-purple-300 hover:text-white hover:scale-110 duration-100 ">${item.price}</div>
              <div className=" cursor-pointer hover:bg-purple-600 hover:text-white hover:scale-110 duration-100 p-2 rounded-sm border-[0.5px]">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
