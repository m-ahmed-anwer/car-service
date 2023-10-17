import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Login from "./routes/login/login";
import NotFound from "./components/404/notFound";
import Outlayer from "./routes/outayer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlayer />}>
        <Route index element={<Home />} path={"/"} />
        <Route index element={<Login />} path={"/login"} />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  );
}

export default App;
