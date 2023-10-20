import React from "react";

function Profile() {
  return (
    <>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          My Profile
        </h1>
        <h2 className="text-gray-400 text-md">
          Building Futures, Serving Clients Today.
        </h2>

        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                ID - 001
              </p>
              <div className="flex items-end my-3 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  Ahmed Anwer
                </p>
              </div>

              <div className="">
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b md:space-x-24">
                  <p>Account Status</p>
                  <div className="flex items-end text-xs">Active</div>
                </div>
                <p className="text-sm font-semibold my-5 text-purple-950 ">
                  Details
                </p>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Name</p>
                  <div className="flex items-end text-xs">Ahmed Anwer</div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Phone Number</p>
                  <div className="flex items-end text-xs">0775497079</div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Email</p>
                  <div className="flex items-end text-xs">
                    ahmedanwer0094@gmail.com
                  </div>
                </div>
                <p className="text-sm font-semibold my-5 text-purple-950 ">
                  Address
                </p>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Street</p>
                  <div className="flex items-end text-xs ">Mallawapitiya</div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>City</p>
                  <div className="flex items-end text-xs ">Kurunegala</div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>State</p>
                  <div className="flex items-end text-xs ">North Western</div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>Country</p>
                  <div className="flex items-end text-xs ">Sri lanka</div>
                </div>
                <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                  <p>ZIP</p>
                  <div className="flex items-end text-xs ">60000</div>
                </div>
                <button
                  type="button"
                  class="py-1 my-3  bg-red-600 hover:bg-red-700  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Make Disable
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
