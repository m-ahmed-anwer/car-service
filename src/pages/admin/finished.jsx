import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

function FinishedServices() {
  return (
    <>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Finished Services
        </h1>
        <h2 className="text-gray-400 text-md">
          Services done by AutoPro Care.
        </h2>

        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white rounded-xl shadow-xl dark:bg-gray-700">
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

                <div className="flex items-end mt-5 space-x-2">
                  <span className="flex items-center text-md  text-gray-700">
                    Sub-Total
                  </span>
                  <p className="text-xl font-bold text-black dark:text-white">
                    Rs. 10000.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white rounded-xl shadow-xl dark:bg-gray-700">
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

                <div className="flex items-end mt-5 space-x-2">
                  <span className="flex items-center text-md  text-gray-700">
                    Sub-Total
                  </span>
                  <p className="text-xl font-bold text-black dark:text-white">
                    Rs. 10000.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full px-4 py-6 bg-white rounded-xl shadow-xl dark:bg-gray-700">
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

                <div className="flex items-end mt-5 space-x-2">
                  <span className="flex items-center text-md  text-gray-700">
                    Sub-Total
                  </span>
                  <p className="text-xl font-bold text-black dark:text-white">
                    Rs. 10000.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinishedServices;
