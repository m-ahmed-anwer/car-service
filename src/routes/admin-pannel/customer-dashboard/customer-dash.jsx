import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerDashboard from "../../../pages/customer/dasboard-outlayer";
import LandingPage from "../../../pages/customer/landing-page";
import FinishedServices from "../../../pages/customer/finished";
import OngoingService from "../../../pages/customer/ongoing";
import Services from "../../../pages/customer/new-services";
import Profile from "../../../pages/customer/profile";

function CustomerRoute() {
  return (
    <Routes>
      <Route path="/*" element={<CustomerDashboard />}>
        <Route index element={<LandingPage />} />
        <Route path="new-service" element={<Services />} />
        <Route path="ongoing-services" element={<OngoingService />} />
        <Route path="finished-services" element={<FinishedServices />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default CustomerRoute;
