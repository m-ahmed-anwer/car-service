import React from "react";
import Dashboard from "../../../pages/admin/dasboard-outlayer";
import LandingPage from "../../../pages/admin/landing-page";
import { Route, Routes } from "react-router-dom";
import Services from "../../../pages/admin/services";
import OngoingService from "../../../pages/admin/ongoing";
import FinishedServices from "../../../pages/admin/finished";
import ManageCustomers from "../../../pages/admin/customers";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/*" element={<Dashboard />}>
        <Route index element={<LandingPage />} />
        <Route path="services" element={<Services />} />
        <Route path="ongoing-services" element={<OngoingService />} />
        <Route path="finished-services" element={<FinishedServices />} />
        <Route path="manage-customers" element={<ManageCustomers />} />
      </Route>
    </Routes>
  );
}

export default AdminRoute;
