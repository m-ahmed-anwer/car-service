import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { CustomerContext } from "../../context/customer-details";

import axios from "axios";
const API_URL = "http://localhost:8080/api/v1/service";

const check = {
  vehicle: false,
  repair: false,
};

function Services() {
  const { currentUser } = useContext(CustomerContext);
  const [data, setData] = useState(currentUser);
  const [errorCheck, setErrorCheck] = useState(check);
  const [selectedRepair, setSelectedRepair] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio" && name === "repair") {
      setSelectedRepair(value);
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!selectedRepair) {
      setErrorCheck({ ...errorCheck, repair: true });
      return;
    } else {
      setErrorCheck({ ...errorCheck, repair: false });
    }

    if (
      !data.fullName ||
      !data.email ||
      !data.phone ||
      !data.brand ||
      !data.model ||
      !data.yom ||
      !data.fuel ||
      !data.transmission ||
      !data.mileage
    ) {
      setErrorCheck({ ...errorCheck, vehicle: true });
      return;
    }

    try {
      const userDetails = await axios.post(API_URL, {
        uid: data.id,
        data,
        brand: data.brand,
        model: data.model,
        yom: data.yom,
        fuel: data.fuel,
        transmission: data.transmission,
        mileage: data.mileage,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        street: data.street,
        country: data.country,
        city: data.city,
        state: data.state,
        zip: data.zip,
        status: true,
        repair: selectedRepair,
      });
      setErrorCheck(check);
      setData(currentUser);
      navigate("/customer-dashboard/services");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

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
        <h3 className="mt-2 text-gray-700">
          If you have any changes on you details{" "}
          <Link to={"/customer-dashboard"} className="text-blue-500">
            Click Here
          </Link>{" "}
          to change the details.
        </h3>

        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-8 shadow-lg col-span-3 lg:p-12">
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <label>Name</label>
                <input
                  className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                  placeholder="Name"
                  type="text"
                  name="fullName"
                  disabled
                  value={data.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label>Email</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    value={data.email}
                    disabled
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Phone</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Phone Number"
                    type="tel"
                    value={data.phone}
                    disabled
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    value={"Full Service"}
                    name="repair"
                    id="fullService"
                    onChange={handleChange}
                    checked={selectedRepair === "Full Service"}
                  />

                  <label
                    htmlFor="fullService"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Full Service</span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    value={"Oil Change"}
                    name="repair"
                    id="oilChange"
                    onChange={handleChange}
                    checked={selectedRepair === "Oil Change"}
                  />

                  <label
                    htmlFor="oilChange"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Oil Change </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    type="radio"
                    tabIndex="-1"
                    value={"Tire Change"}
                    name="repair"
                    id="tireChange"
                    onChange={handleChange}
                    checked={selectedRepair === "Tire Change"}
                  />

                  <label
                    htmlFor="tireChange"
                    className="block w-full rounded-lg border border-gray-200 p-3 hover:bg-slate-100 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm">Tire Change</span>
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
                    value={data.brand}
                    disabled
                    name="brand"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Model</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Model"
                    type="text"
                    value={data.model}
                    disabled
                    name="model"
                    onChange={handleChange}
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
                    value={data.yom}
                    disabled
                    name="yom"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Mileage</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Mileage"
                    type="number"
                    value={data.mileage}
                    disabled
                    onChange={handleChange}
                    name="mileage"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label>Fuel Type</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Fuel Type"
                    type="text"
                    value={data.fuel}
                    onChange={handleChange}
                    disabled
                    name="fuel"
                  />
                </div>
                <div>
                  <label>Transmission</label>
                  <input
                    className="p-3 text-sm h-10 border mt-1 rounded-md px-4 w-full bg-gray-50"
                    placeholder="Transmission"
                    type="text"
                    name="transmission"
                    value={data.transmission}
                    disabled
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errorCheck.vehicle && (
                <p className="text-red-500 text-xs italic">
                  Feilds cannot be empty, Please check all the feilds.
                </p>
              )}
              {errorCheck.repair && (
                <p className="text-red-500 text-xs italic">
                  Please select a repair option.
                </p>
              )}

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
