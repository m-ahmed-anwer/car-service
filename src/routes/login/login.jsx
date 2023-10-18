import React, { useState } from "react";

import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Login() {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <section className=" bg-slate-50  flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Your Car, Our Expert Care!
            </h1>

            <p className="mt-4 text-gray-500">
              Welcome to our AutoPro Care management portal 🏁.
            </p>
          </div>

          <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-100 border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <AtSymbolIcon className="h-4 w-4 text-gray-400" />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type={`${!showPass ? "password" : "text"}`}
                  className="w-full rounded-lg border-gray-100 border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span
                  className="absolute inset-y-0 end-0 grid place-content-center px-4"
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? (
                    <EyeIcon className="h-4 w-4 text-gray-400" />
                  ) : (
                    <EyeSlashIcon className="h-4 w-4 text-gray-400" />
                  )}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-5">
              <p className="text-sm text-gray-500">
                No account?{"  "}
                <Link className="underline text-purple-800" to={"/signup"}>
                  Sign up
                </Link>
              </p>

              <button
                className="group relative inline-block focus:outline-none focus:ring"
                type="submit"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-purple-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative inline-block border-2 border-current px-5 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                  Log In
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1621615578530-cbf3c443165f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default Login;
