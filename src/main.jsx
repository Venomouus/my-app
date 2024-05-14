/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "./routes/Home.jsx";
import "./index.css";
import Estado from "./routes/Estado.jsx";
import CovidStatus from "./routes/CovidStatus.jsx";
import CovidCountry from "./routes/CovidCountry.jsx";
import Form from "./routes/Form.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/estado",
        element: <Estado />,
      },
      {
        path: "/covidStatus",
        element: <CovidStatus />,
      },
      {
        path: "/covidCountry",
        element: <CovidCountry />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
