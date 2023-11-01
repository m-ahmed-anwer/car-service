import React, { useContext, useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { CustomerContext } from "../../context/customer-details";
import axios from "axios";
const API_URL = "http://localhost:8080/api/v1/users/";

const check = {
  fullName: false,
  phone: false,
  country: false,
  street: false,
  city: false,
  state: false,
  zip: false,
  brand: false,
  model: false,
  yom: false,
  fuel: false,
  transmission: false,
  mileage: false,
};

function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CustomerContext);

  const [editedUserData, setEditedUserData] = useState(currentUser);
  const [error, setError] = useState(check);

  useEffect(() => {}, []);

  const editHandler = () => {
    setIsEdit(true);
    setError(check);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidPhoneNumber = (phone) => {
    return phone.length === 10;
  };

  const submitHandle = async (event) => {
    event.preventDefault();

    if (!isValidPhoneNumber(editedUserData.phone)) {
      setError({ ...error, phone: true });
      return;
    }

    if (!editedUserData.fullName) {
      setError({ ...error, fullName: true });
      return;
    }

    if (!editedUserData.country) {
      setError({ ...error, country: true });
      return;
    }
    if (!editedUserData.street) {
      setError({ ...error, street: true });
      return;
    }
    if (!editedUserData.city) {
      setError({ ...error, city: true });
      return;
    }
    if (!editedUserData.state) {
      setError({ ...error, state: true });
      return;
    }
    if (!editedUserData.zip) {
      setError({ ...error, zip: true });
      return;
    }
    if (!editedUserData.brand) {
      setError({ ...error, brand: true });
      return;
    }

    if (!editedUserData.model) {
      setError({ ...error, model: true });
      return;
    }

    if (!editedUserData.yom) {
      setError({ ...error, yom: true });
      return;
    }

    if (!editedUserData.fuel) {
      setError({ ...error, fuel: true });
      return;
    }

    if (!editedUserData.transmission) {
      setError({ ...error, transmission: true });
      return;
    }

    if (!editedUserData.mileage) {
      setError({ ...error, mileage: true });
      return;
    }

    try {
      const userDetails = await axios.put(
        API_URL + `${currentUser.id}`,
        editedUserData
      );
      setCurrentUser(editedUserData);
      setIsEdit(!isEdit);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const cancelHandle = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <section className="h-screen px-4 pb-24 overflow-auto md:px-6 ">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Hello {currentUser && currentUser.fullName}
        </h1>

        <h2 className="text-gray-400 text-md">
          Building Futures, Serving Clients Today.
        </h2>
        <div className="w-full lg:w-3/4 px-4 mx-auto mt-10 mb-16">
          <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50 border-0 py-6">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              {!isEdit && (
                <div className="flex flex-col justify-end items-end">
                  <div className="group relative  flex justify-center">
                    <PencilSquareIcon
                      className="w-5 cursor-pointer "
                      onClick={editHandler}
                    />
                    <span className="absolute w-fit  top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                      Edit Profile
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={submitHandle}>
                {!isEdit && (
                  <div className="items-center flex flex-col">
                    <div className="w-20 h-20 flex justify-center items-center mr-3 text-sm bg-gray-100 rounded-full md:mr-0 ring-2 ring-gray-300 ">
                      <div className="">
                        <img
                          className="w-20 h-20 rounded-full"
                          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                          alt="profile"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-full">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleInputChange}
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={editedUserData.fullName}
                        disabled={!isEdit}
                        className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                      />
                    </div>
                    {isEdit && error.fullName && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2 relative flex items-center">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        value={editedUserData.email}
                        disabled
                        className="cursor-not-allowed px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleInputChange}
                        id="phone"
                        name="phone"
                        type="number"
                        value={editedUserData.phone}
                        disabled={!isEdit}
                        className=" px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                      />
                    </div>
                    {isEdit && error.phone && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Incorrect Phone Number.
                      </p>
                    )}
                  </div>
                </div>
                <>
                  <h6 className="text-blueGray-400 text-md mt-11 mb-4  uppercase">
                    Company details
                  </h6>
                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          id="country"
                          name="country"
                          type="text"
                          value={editedUserData.country}
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.country && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="street"
                          disabled={!isEdit}
                          value={editedUserData.street}
                          id="street"
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.street && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="city"
                          id="city"
                          value={editedUserData.city}
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.city && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="state"
                          value={editedUserData.state}
                          id="state"
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.state && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="zip"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          type="number"
                          name="zip"
                          id="zip"
                          value={editedUserData.zip}
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.zip && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                  </div>
                  <h6 className="text-blueGray-400 text-md mt-11 mb-4  uppercase">
                    Vehicle details
                  </h6>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="brand"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Brand
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          id="brand"
                          name="brand"
                          type="text"
                          value={editedUserData.brand}
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.brand && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="model"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Model
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          id="model"
                          name="model"
                          type="text"
                          value={editedUserData.model}
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.model && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="yom"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Year of Manufacture
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          id="yom"
                          name="yom"
                          type="number"
                          value={editedUserData.yom}
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.yom && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="fuel"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Fuel Type
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          id="fuel"
                          name="fuel"
                          type="text"
                          value={editedUserData.fuel}
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.fuel && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="transmission"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Transmission
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          id="transmission"
                          name="transmission"
                          type="text"
                          value={editedUserData.transmission}
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.transmission && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="mileage"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mileage
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={handleInputChange}
                          id="mileage"
                          name="mileage"
                          type="number"
                          value={editedUserData.mileage}
                          disabled={!isEdit}
                          className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                        />
                      </div>
                      {isEdit && error.mileage && (
                        <p className="text-red-500 text-xs italic mt-1">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                  </div>
                </>

                {isEdit && (
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                      onClick={cancelHandle}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-blue-700 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Save Details
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
