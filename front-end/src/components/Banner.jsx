import React from "react";
import LibraryImage from '../assets/library.jpg'

export const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:flex-row flex-col order-2 md:order-1 bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white">
        <div className="w-full md:w-1/2 pt-10 md:pt-24">
          <h1 className="text-4xl font-bold ">
            Welcome to the our Library we help you find a{" "}
            <span className="text-purple-600"> Best Books</span>
          </h1>
          <p className="py-6 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            error, quia doloremque eum inventore eaque molestias vel voluptatem
            itaque et esse perferendis iusto temporibus, deleniti illo
            repudiandae ipsa aspernatur animi magni perspiciatis obcaecati
            eligendi, quis facere. Repellendus necessitatibus quos suscipit!
          </p>
          <div className="py-6">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-outline btn-primary my-6">Send Email</button>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center order-first md:order-2 my-6">
        <img src={LibraryImage} alt="library image" className="h-96 w-96 object-cover rounded-sm backdrop-blur-3xl" />
        </div>
      </div>
    </>
  );
};
