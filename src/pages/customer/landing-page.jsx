import React, { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const check = {
  first_name: false,
  last_name: false,
  userPhone: false,
  country: false,
  street: false,
  city: false,
  state: false,
  zip: false,
};
const form = {
  email: "asd",
  userPhone: "",
  first_name: "",
  last_name: "",

  country: "",
  street: "",
  city: "",
  state: "",
  zip: "",
};

function Profile() {
  const [isEdit, setIsEdit] = useState(false);

  const [editedUserData, setEditedUserData] = useState(form);
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

    if (!isValidPhoneNumber(editedUserData.userPhone)) {
      setError({ ...error, userPhone: true });
      return;
    }

    if (!editedUserData.first_name) {
      setError({ ...error, first_name: true });
      return;
    }
    if (!editedUserData.last_name) {
      setError({ ...error, last_name: true });
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
    alert("Hello");
  };

  const cancelHandle = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <section className="h-screen px-4 pb-24 overflow-auto md:px-6 ">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Hello Ahmed!
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
                    <div className="w-20 h-20 flex justify-center items-center mr-3 text-sm bg-gray-800 rounded-full md:mr-0 ring-2 ring-gray-300 ">
                      <div className="">
                        <img
                          className="w-20 h-20 rounded-full"
                          // src={photoURL}
                          alt="profile"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                      htmlFor="userPhone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleInputChange}
                        id="userPhone"
                        name="userPhone"
                        type="number"
                        value={editedUserData.userPhone}
                        disabled={!isEdit}
                        className=" px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                      />
                    </div>
                    {isEdit && error.userPhone && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Incorrect Phone Number.
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Fisrt Name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleInputChange}
                        id="first_name"
                        name="first_name"
                        type="text"
                        value={editedUserData.first_name}
                        disabled={!isEdit}
                        className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                      />
                    </div>
                    {isEdit && error.first_name && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleInputChange}
                        id="last_name"
                        name="last_name"
                        type="text"
                        value={editedUserData.last_name}
                        disabled={!isEdit}
                        className="px-2 block w-full rounded-md border-0 py-1.5  text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-md"
                      />
                    </div>
                    {isEdit && error.last_name && (
                      <p className="text-red-500 text-xs italic mt-1">
                        Please fill out this field.
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
