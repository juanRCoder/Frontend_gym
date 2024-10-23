import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import LayoutLanding from "./layout/LayoutLanding";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageLocales from "./pages/locales/PageLocales";
import "./animation.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLanding />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/locales",
        element: <PageLocales />,
      }
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);