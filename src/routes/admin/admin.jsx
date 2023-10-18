import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

import React, { useState } from "react";

function Admin() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-purple-600 sm:text-3xl">
          Admin Users Only
        </h1>

        <form
          action=""
          className="bg-gray-50 mb-0 py-10 mt-6 space-y-10 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Log in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200  border p-4 pe-12 text-sm shadow-sm"
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
                className="w-full rounded-lg border-gray-200 p-4 border  pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span
                onClick={() => {
                  setShowPass(!showPass);
                }}
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                {showPass ? (
                  <EyeIcon className="h-4 w-4 text-gray-400" />
                ) : (
                  <EyeSlashIcon className="h-4 w-4 text-gray-400" />
                )}
              </span>
            </div>
          </div>

          <button
            className="w-full group relative inline-block focus:outline-none focus:ring"
            type="submit"
          >
            <span className="absolute w-full inset-0 translate-x-1.5 translate-y-1.5 bg-purple-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative  w-full inline-block border-2 border-current px-5 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
              Log In
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
