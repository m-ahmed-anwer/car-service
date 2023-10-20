import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Welcome to Admin Dashboard
        </h1>
        <h2 className="text-gray-400 text-md">
          Here's what's happening with our company in summary.
        </h2>
        <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
          <div className="w-full md:w-6/12">
            <div className="relative w-full overflow-hidden bg-white shadow-lg dark:bg-gray-700">
              <div className="block w-full h-full">
                <div className="flex items-center justify-between px-4 py-7 space-x-4">
                  <div className="flex items-center">
                    <span className="relative p-5 bg-yellow-100 rounded-full">
                      <CurrencyDollarIcon className="absolute h-7 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </span>
                    <p className="ml-2 text-sm font-semibold text-gray-700 border-b border-gray-200 dark:text-white">
                      Income within Ongoing Orders
                    </p>
                  </div>
                  <div className="mt-6 text-xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
                    Rs. 44,000.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full space-x-4 md:w-1/2">
            <div className="w-1/2">
              <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-xl font-bold text-black dark:text-white">
                  12
                </p>
                <p className="text-sm text-gray-400">Active Services</p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                <p className="text-xl font-bold text-black dark:text-white">
                  Rs. 10000.00
                </p>
                <p className="text-sm text-gray-400">Revenue in total</p>
                <span className="absolute p-4 bg-purple-700 rounded-full top-2 right-4">
                  <CurrencyDollarIcon className="absolute h-6 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to={"/admin-dashboard/ongoing-services"}
            className="text-lg font-bold text-gray-600"
          >
            Recent Accepted Services
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Tire Changing
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  BMW
                </p>
                <span className="flex items-center text-xl  text-gray-700">
                  X5
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Transmission- Automatic</p>
                <div className="flex items-end text-xs">Year- 2023</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Mileage- 10000km</p>
                <div className="flex items-end text-xs">Fuel- Petrol</div>
              </div>

              <div className="">
                <p className="text-sm font-semibold my-5 text-purple-950 ">
                  Customer Details
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
                  <div className="flex items-end text-xs ">
                    ahmedanwer0094@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Tire Changing
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  BMW
                </p>
                <span className="flex items-center text-xl  text-gray-700">
                  X5
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Transmission- Automatic</p>
                <div className="flex items-end text-xs">Year- 2023</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Mileage- 10000km</p>
                <div className="flex items-end text-xs">Fuel- Petrol</div>
              </div>

              <div className="">
                <p className="text-sm font-semibold my-5 text-purple-950 ">
                  Customer Details
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
                  <div className="flex items-end text-xs ">
                    ahmedanwer0094@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                Tire Changing
              </p>
              <div className="flex items-end my-6 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  BMW
                </p>
                <span className="flex items-center text-xl  text-gray-700">
                  X5
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Transmission- Automatic</p>
                <div className="flex items-end text-xs">Year- 2023</div>
              </div>
              <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                <p>Mileage- 10000km</p>
                <div className="flex items-end text-xs">Fuel- Petrol</div>
              </div>

              <div className="">
                <p className="text-sm font-semibold my-5 text-purple-950 ">
                  Customer Details
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
                  <div className="flex items-end text-xs ">
                    ahmedanwer0094@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-10">
          <Link
            to={"/admin-dashboard/manage-customers"}
            className="text-lg font-bold text-gray-600"
          >
            Recent Customers
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <div className="flex items-end my-3 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  Ahmed Anwer
                </p>
              </div>

              <div className="">
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
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <div className="flex items-end my-3 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  Ahmed Anwer
                </p>
              </div>

              <div className="">
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
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
              <div className="flex items-end my-3 space-x-2">
                <p className="text-2xl font-bold text-black dark:text-white">
                  Ahmed Anwer
                </p>
              </div>

              <div className="">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
