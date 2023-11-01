import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CustomerContext } from "../../context/customer-details";

const API_URL = "http://localhost:8080/api/v1/service";

function OngoingService() {
  const [data, setData] = useState([]);
  const { currentUser } = useContext(CustomerContext);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const temp = await axios.get(API_URL + `/uid/${currentUser.id}`);
        setData(temp.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getDetails();
  }, []);

  return (
    <>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Services
        </h1>
        <h2 className="text-gray-400 text-md">
          Services that have taken in AutoPro Care.
        </h2>

        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((index) => {
            return (
              <div key={index.id}>
                <div className="w-full">
                  <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
                    <p className="text-md font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                      {index.repair}
                    </p>
                    <div className="flex items-end my-6 space-x-2">
                      <p className="text-2xl font-bold text-black dark:text-white">
                        {index.brand}
                      </p>
                      <span className="flex items-center text-xl  text-gray-700">
                        {index.model}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Transmission- {index.transmission}</p>
                      <div className="flex items-end text-xs">
                        Year- {index.yom}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Mileage- {index.mileage}km</p>
                      <div className="flex items-end text-xs">
                        Fuel- {index.fuel}
                      </div>
                    </div>

                    <div className="">
                      <p className="text-sm font-semibold my-5 text-purple-950 ">
                        Customer Details
                      </p>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>Name</p>
                        <div className="flex items-end text-xs">
                          {index.fullName}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>Phone Number</p>
                        <div className="flex items-end text-xs">
                          {index.phone}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>Email</p>
                        <div className="flex items-end text-xs ">
                          {index.email}
                        </div>
                      </div>
                      <div className="flex  my-5 space-x-2 items-center">
                        <span className="flex items-center text-md  text-gray-700">
                          Status
                        </span>
                        <p
                          className={`text-lg font-bold ${
                            index.status
                              ? "bg-red-100  text-red-900 "
                              : "bg-green-100  text-green-900 "
                          }p-1 rounded-xl dark:text-white`}
                        >
                          {index.status ? "Ongoing" : "Finished"}
                        </p>
                      </div>

                      <div className="flex items-end my-5 space-x-2">
                        <span className="flex items-center text-md  text-gray-700">
                          Sub-Total
                        </span>
                        <p className="text-xl font-bold text-black dark:text-white">
                          Rs. 10000.00
                        </p>
                      </div>
                      {!index.status && (
                        <button
                          type="button"
                          onClick={async () => {
                            try {
                              const temp = await axios.delete(
                                API_URL + `/${index.id}`
                              );
                              setData((prevData) =>
                                prevData.filter((item) => item.id !== index.id)
                              );
                            } catch (error) {
                              console.error("Error deleting data:", error);
                            }
                          }}
                          class="py-1 my-3   bg-red-600 hover:bg-red-700  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OngoingService;
