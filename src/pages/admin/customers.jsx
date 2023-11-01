import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/users";

function ManageCustomers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(API_URL);

        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Our Clients
        </h1>
        <h2 className="text-gray-400 text-md">
          Building Futures, Serving Clients Today.
        </h2>

        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((res) => {
            return (
              <div key={res.id}>
                <div className="w-full">
                  <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-xl dark:bg-gray-700">
                    <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
                      ID - {res.id}
                    </p>
                    <div className="flex items-end my-3 space-x-2">
                      <p className="text-2xl font-bold text-black dark:text-white">
                        {res.fullName}
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
                        <div className="flex items-end text-xs">
                          {res.fullName}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>Phone Number</p>
                        <div className="flex items-end text-xs">
                          {res.phone}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>Email</p>
                        <div className="flex items-end text-xs">
                          {res.email}
                        </div>
                      </div>
                      <p className="text-sm font-semibold my-5 text-purple-950 ">
                        Address
                      </p>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>Street</p>
                        <div className="flex items-end text-xs ">
                          {res.street}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>City</p>
                        <div className="flex items-end text-xs ">
                          {res.city}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>State</p>
                        <div className="flex items-end text-xs ">
                          {res.state}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>Country</p>
                        <div className="flex items-end text-xs ">
                          {res.country}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>ZIP</p>
                        <div className="flex items-end text-xs ">{res.zip}</div>
                      </div>
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

export default ManageCustomers;
