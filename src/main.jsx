import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import LayoutLanding from "./layout/LayoutLanding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLanding />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
