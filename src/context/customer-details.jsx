import axios from "axios";
import { createContext, useEffect, useState } from "react";

const API_URL = "http://localhost:8080/api/v1/users";

export const CustomerContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const CustomerProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    currentUser,
    setCurrentUser,
    isLoading,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};
