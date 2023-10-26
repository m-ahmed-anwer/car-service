import React from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/users";

function Server() {
  const getUsers = () => {
    return axios.get(API_URL);
  };

  const getUsersById = (number) => {
    return axios.get(API_URL + "/" + number);
  };

  const deleteUserById = (number) => {
    return axios.delete(API_URL + "/" + number);
  };

  const updateUserById = (number) => {
    return axios.put(API_URL + "/" + number);
  };

  const createUser = ({ details }) => {
    return axios.post(API_URL);
  };
}

export default new Server();
