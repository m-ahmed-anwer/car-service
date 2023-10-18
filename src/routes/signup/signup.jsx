import React from "react";
import Navbar from "../../components/navbar/navbar";

function SignUp() {
  return (
    <>
      <Navbar />
      <div class="bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 pb-24 ">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mt-10 pb-10 border-b border-gray-300 ">
          <div class="text-gray-600">
            <p class="font-medium text-lg text-black">Vehicle Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-2">
                <label>Vehicle Brand</label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="BMW"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div class="md:col-span-2">
                <label>Vehicle Model</label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  placeholder="X5"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div class="md:col-span-2">
                <label>Year of Manufacture</label>
                <input
                  type="number"
                  name="year"
                  id="year"
                  placeholder="2023"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              <div class="md:col-span-2">
                <label>Fuel Type</label>
                <input
                  type="text"
                  name="fuelType"
                  id="fuelType"
                  placeholder="Petrol"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              <div class="md:col-span-2">
                <label>Transmission</label>
                <input
                  type="text"
                  name="transmission"
                  id="transmission"
                  placeholder="Automatic"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div class="md:col-span-2">
                <label>Mileage</label>
                <input
                  type="number"
                  name="mileage"
                  id="mileage"
                  placeholder="10000"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mt-10">
          <div class="text-gray-600">
            <p class="font-medium text-lg text-black">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Graham Bell"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="email@domain.com"
                />
              </div>
              <div class="md:col-span-5">
                <label for="email">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="0771234567"
                />
              </div>

              <div class="md:col-span-3">
                <label for="address">Address / Street</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="Street"
                />
              </div>

              <div class="md:col-span-2">
                <label for="city">City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="City"
                />
              </div>

              <div class="md:col-span-2">
                <label for="country">Country / region</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input
                    name="country"
                    id="country"
                    placeholder="Country"
                    class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                  />
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="state">State / province</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input
                    name="state"
                    id="state"
                    placeholder="State"
                    class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                  />
                </div>
              </div>

              <div class="md:col-span-1">
                <label for="zipcode">Zipcode</label>
                <input
                  type="number"
                  name="zipcode"
                  id="zipcode"
                  class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="ZIP"
                />
              </div>
              <div class="md:col-span-2">
                <label>Password</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="*********"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              <div class="md:col-span-2">
                <label>Confirm Password</label>
                <input
                  type="text"
                  name="Cpassword"
                  id="Cpassword"
                  placeholder="*********"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div class="md:col-span-5  mt-8 ">
                <div class="inline-flex items-end">
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
        </div>
      </div>
    </>
  );
}

export default SignUp;
