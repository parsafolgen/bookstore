import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-white z-20">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="p-4">
              <div>
                <label htmlFor="email">Email :</label>
                <br />
                <input
                  type="text"
                  id="email"
                  className="bg-white dark:bg-slate-900 outline-0 border-b-[1px] rounded-md p-2 ml-12"
                  placeholder="enter your email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-700">This field is required!</span>}
              </div>
              <br />
              <div>
                <label htmlFor="password">Password :</label>
                <br />
                <input
                  type="text"
                  id="password"
                  className="bg-white dark:bg-slate-900 outline-0 border-b-[1px] rounded-md p-2 ml-12 mt-2"
                  placeholder="enter your password"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className="text-sm text-red-700">This field is required!</span>}
              </div>
              <div className="flex justify-between pt-8 items-center">
                <button className="rounded-md bg-purple-500 py-2 px-3 hover:scale-105">
                  Login
                </button>
                <p>
                  Not registered?
                  <Link to="/signup">
                    <span className="underline text-blue-500 cursor-pointer">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};
