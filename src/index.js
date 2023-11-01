import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from "./context/admin-details";
import { CustomerProvider } from "./context/customer-details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <CustomerProvider>
          <App />
        </CustomerProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
