import React from "react";
import list from "../../public/list.json";
import { Card } from "./Card";
import { Link } from "react-router-dom";

export const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24 bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl">
            Hello We're so happy for your selected
            <span className="text-purple-400"> thank you :)</span>
          </h1>
          <p className="mt-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            nihil reiciendis sed magni repudiandae minus? Cupiditate totam fugit
            omnis! Officia, explicabo? A odit hic libero et cumque nisi aliquid
            quasi esse, sed eaque beatae ducimus, atque soluta, accusantium sit
            ipsum. Recusandae reiciendis quae aliquid iste est fuga
            reprehenderit inventore, modi veritatis autem quia beatae molestiae
            quos exercitationem illo. Dolorum hic accusamus iusto quidem
            distinctio voluptates? Incidunt delectus perspiciatis iure ad!
          </p>
          <Link to="/">
            <button className="bg-purple-600 py-2 px-3 rounded-md text-white hover:scale-110 duration-75 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-10 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {list.map((book) => (
            <Card item={book} key={book.id} />
          ))}
        </div>
      </div>
    </>
  );
};
