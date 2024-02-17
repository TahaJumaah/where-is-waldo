import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Canvas from "./components/canvas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar></NavBar>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/:difficulty",
        element: <Canvas></Canvas>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
