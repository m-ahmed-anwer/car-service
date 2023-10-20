import React, { useContext } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Home from "./routes/landing-page/home/home";
import Login from "./routes/landing-page/login/login";
import NotFound from "./components/404/notFound";
import Outlayer from "./routes/outayer";
import "./index.css";
import SignUp from "./routes/landing-page/signup/signup";
import Admin from "./routes/landing-page/admin/admin";
import AdminSignUp from "./routes/landing-page/admin/admin.signup";
import { AdminContext } from "./context/admin-details";
import AdminRoute from "./routes/admin-pannel/dashboard/admin-dashboard-route";
import CustomerRoute from "./routes/admin-pannel/customer-dashboard/customer-dash";

function App() {
  const { currentUser } = useContext(AdminContext);
  return (
    <Routes>
      <Route path="/" element={<Outlayer />}>
        <Route index element={<Home />} path={"/"} />
        <Route element={<Login />} path={"/login"} />
        <Route element={<SignUp />} path={"/signup"} />
        <Route element={<Admin />} path={"/admin"} />
        <Route element={<AdminSignUp />} path={"/admin-signup"} />
        <Route element={<NotFound />} path="*" />
        <Route element={<Login />} path={"/login"} />

        <Route
          path="/admin-dashboard/*"
          // element={currentUser ? <AdminRoute /> : <Navigate to="/admin" />}
          element={<AdminRoute />}
        />

        <Route
          path="/customer-dashboard/*"
          // element={currentUser ? <AdminRoute /> : <Navigate to="/admin" />}
          element={<CustomerRoute />}
        />
      </Route>
    </Routes>
  );
}

export default App;
