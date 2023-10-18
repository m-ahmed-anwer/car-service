import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Login from "./routes/login/login";
import NotFound from "./components/404/notFound";
import Outlayer from "./routes/outayer";
import "./index.css";
import SignUp from "./routes/signup/signup";
import Admin from "./routes/admin/admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlayer />}>
        <Route index element={<Home />} path={"/"} />
        <Route element={<Login />} path={"/login"} />
        <Route element={<SignUp />} path={"/signup"} />
        <Route element={<Admin />} path={"/admin"} />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  );
}

export default App;
