import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

function Outlayer() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
}

export default Outlayer;
