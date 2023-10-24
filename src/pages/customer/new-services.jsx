import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const vehicleForm = {
  brand: "",
  model: "",
  yom: "",
  fuel: "",
  transmission: "",
  mileage: "",
  full_name: "",
  email: "",
  phone: "",
};
const check = {
  vehicle: false,
};

function Services() {
  const [data, setData] = useState(vehicleForm);
  const [errorCheck, setErrorCheck] = useState(check);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !data.brand ||
      !data.model ||
      !data.yom ||
      !data.fuel ||
      !data.transmission ||
      !data.mileage ||
      !data.mileage
    ) {
      setErrorCheck({ ...errorCheck, vehicle: true });
      return;
    }

    setErrorCheck(check);
    setOpen(true);

    console.log("first");
  };
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          New Service
        </h1>
        <h2 className="text-gray-400 text-md">
          Building Futures, Serving Clients Today. Just Drop the Service We Take
          All Responsible.
        </h2>

        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          {/* <form onSubmit={submitHandler}>
            <div className="grid gap-4 text-sm grid-cols-1 lg:grid-cols-3 mt-10 pb-10 w-screen max-w-md-fukk ">
              <div className="text-gray-600">
                <p className="font-medium text-lg text-black">
                  Vehicle Details
                </p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2 mt-5">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <label>Vehicle Brand</label>
                    <input
                      type="text"
                      name="brand"
                      placeholder="BMW"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.brand}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label>Vehicle Model</label>
                    <input
                      type="text"
                      name="model"
                      placeholder="X5"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.model}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label>Year of Manufacture</label>
                    <input
                      type="number"
                      name="yom"
                      placeholder="2023"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.yom}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label>Fuel Type</label>
                    <input
                      type="text"
                      name="fuel"
                      placeholder="Petrol"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.fuel}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label>Transmission</label>
                    <input
                      type="text"
                      name="transmission"
                      placeholder="Automatic"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.transmission}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label>Mileage</label>
                    <input
                      type="number"
                      name="mileage"
                      placeholder="10000"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.mileage}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    {errorCheck.vehicle && (
                      <p className="text-red-500 text-xs italic">
                        Feilds cannot be empty, Please check all the feilds.
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-5  mt-8 ">
                    <button
                      className="group relative inline-block  focus:outline-none focus:ring"
                      type="submit"
                    >
                      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-purple-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                      <span className="relative inline-block border-2 border-current px-5 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                        Add a New Service
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form> */}
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label>Name</label>
                <input
                  className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                  placeholder="Name"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label>Email</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Email address"
                    type="email"
                  />
                </div>

                <div>
                  <label>Phone</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Phone Number"
                    type="tel"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option1"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Option 1 </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option2"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Option 2 </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option3"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Option 3 </span>
                  </label>
                </div>
              </div>
              <p className="font-medium text-lg text-black py-4">
                Vehicle Details
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label>Brand</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Brand"
                    type="text"
                  />
                </div>
                <div>
                  <label>Model</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Model"
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label>Year of Manufacture</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="YOM"
                    type="number"
                  />
                </div>
                <div>
                  <label>Mileage</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Mileage"
                    type="number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label>Fuel Type</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Fuel Type"
                    type="number"
                  />
                </div>
                <div>
                  <label>Transmission</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Transmission"
                    type="number"
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  className="group relative inline-block  focus:outline-none focus:ring"
                  type="submit"
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-purple-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                  <span className="relative inline-block border-2 border-current px-5 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                    Add a New Service
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
