import React, { useState } from "react";
import Navbar from "../../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/modal/modal";

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
  street: "",
  country: "",
  city: "",
  state: "",
  zip: "",
  password: "",
  confirmPassword: "",
};
const check = {
  vehicle: false,
  personal: false,
  password: false,
  passwordLength: false,
};

function SignUp() {
  const [data, setData] = useState(vehicleForm);
  const [errorCheck, setErrorCheck] = useState(check);
  const navigate = useNavigate();

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

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

    if (
      !data.full_name ||
      !data.email ||
      !data.phone ||
      !data.street ||
      !data.country ||
      !data.city ||
      !data.state ||
      !data.zip ||
      !data.password ||
      !data.confirmPassword
    ) {
      setErrorCheck({ ...errorCheck, personal: true });
      return;
    }
    if (data.password !== data.confirmPassword) {
      setErrorCheck({ ...errorCheck, password: true });
      return;
    }

    if (!isPasswordValid(data.password)) {
      setErrorCheck({ ...errorCheck, passwordLength: true });
      return;
    }

    setErrorCheck(check);
    setOpen(true);

    console.log("first");
  };
  const [open, setOpen] = useState(false);

  return (
    <>
      <>
        <Navbar />
        <div className="bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 pb-24 ">
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mt-10 pb-10 border-b border-gray-300 ">
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
                </div>
              </div>
            </div>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mt-10">
              <div className="text-gray-600">
                <p className="font-medium text-lg text-black">
                  Personal Details
                </p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2 mt-5">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Graham Bell"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.full_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label>Email Address</label>
                    <input
                      type="text"
                      name="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="email@domain.com"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="0771234567"
                      value={data.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label>Address / Street</label>
                    <input
                      type="text"
                      name="street"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Street"
                      value={data.street}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="City"
                      value={data.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label>Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={data.country}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label>State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={data.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label>Zipcode</label>
                    <input
                      type="number"
                      name="zip"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="ZIP"
                      value={data.zip}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label>Password</label>
                    <input
                      type="text"
                      name="password"
                      placeholder="*********"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label>Confirm Password</label>
                    <input
                      type="text"
                      name="confirmPassword"
                      placeholder="*********"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={data.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    {errorCheck.personal && (
                      <p className="text-red-500 text-xs italic">
                        Feilds cannot be empty, Please check all the feilds.
                      </p>
                    )}
                    {errorCheck.password && (
                      <p className="text-red-500 text-xs italic">
                        Password need to match with Confirm Password.
                      </p>
                    )}
                    {errorCheck.passwordLength && (
                      <p className="text-red-500 text-xs italic">
                        Password need to contain atleat 6 characters.
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-5  mt-8 ">
                    <button
                      className="group relative inline-block focus:outline-none focus:ring"
                      type="submit"
                    >
                      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-purple-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                      <span className="relative inline-block border-2 border-current px-5 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                        Sign Up
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    </>
  );
}

export default SignUp;
