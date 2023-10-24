import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerDashboard from "../../../pages/customer/dasboard-outlayer";
import LandingPage from "../../../pages/customer/landing-page";
import FinishedServices from "../../../pages/customer/finished";
import OngoingService from "../../../pages/customer/ongoing";
import Services from "../../../pages/customer/new-services";
import NotFoundCustomer from "../../../components/404/notFoundCustomer";

function CustomerRoute() {
  return (
    <Routes>
      <Route path="/*" element={<CustomerDashboard />}>
        <Route index element={<LandingPage />} />
        <Route path="new-service" element={<Services />} />
        <Route path="ongoing-services" element={<OngoingService />} />
        <Route path="finished-services" element={<FinishedServices />} />
        <Route element={<NotFoundCustomer />} path="*" />
      </Route>
    </Routes>
  );
}

export default CustomerRoute;
