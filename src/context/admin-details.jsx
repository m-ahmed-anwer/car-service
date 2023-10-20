import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const AdminProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    currentUser,
    setCurrentUser,
    isLoading,
  };
  useEffect(() => {
    setCurrentUser("As");
  }, []);

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
