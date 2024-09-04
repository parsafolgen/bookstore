import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { useForm } from "react-hook-form";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="text-xs sm:text-base flex items-center justify-center w-full h-[790px] bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog
          id="my_modal_4"
          className="modal-box w-[60%] block bg-slate-200 shadow-2xl p-5 rounded-3xl text-slate-900 dark:bg-slate-900 dark:text-white"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white"
          >
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>
            </form>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="p-4">
              <div className="py-4">
                <label htmlFor="name">Name :</label>
                <br />
                <input
                  type="text"
                  id="name"
                  className="bg-white dark:bg-slate-900 outline-0 border-b-[1px] rounded-md p-2 ml-12 w-[60%]"
                  placeholder="enter your fullname"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-700">
                    This field is required!
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email">Email :</label>
                <br />
                <input
                  type="text"
                  id="email"
                  className="bg-white dark:bg-slate-900 outline-0 border-b-[1px] rounded-md p-2 ml-12 w-[60%]"
                  placeholder="enter your email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-700">
                    This field is required!
                  </span>
                )}
              </div>
              <br />
              <div className="-mt-1">
                <label htmlFor="password">Password :</label>
                <br />
                <input
                  type="text"
                  id="password"
                  className="bg-white dark:bg-slate-900  outline-0 border-b-[1px] rounded-md p-2 ml-12 mt-2 w-[60%]"
                  placeholder="enter your password"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-700">
                    This field is required!
                  </span>
                )}
              </div>
              <div className="flex justify-between pt-8 items-center">
                <button className="rounded-md bg-purple-500 text-white py-2 px-3 hover:scale-105">
                  Signup
                </button>
                <p>
                  Have account?
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="underline text-blue-500 cursor-pointer text-nowrap"
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
};
