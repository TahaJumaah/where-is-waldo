import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Canvas from "./components/canvas.jsx";
import MainMenu from "./components/mainMenu.jsx";

async function difficultyLoader({ params, request }) {
  const server = "https://where-is-waldo-server-production.up.railway.app";
  const res = await fetch(`${server}/play/${params.difficulty}`, {
    credentials: "include",
  });
  console.log(res);
  return res;
}

async function difficultyAction({ params, request }) {
  // console.log("CANVAS ACTION");
  // console.log(params);
  // console.log(request);

  return "ACTION RETURN";
}
// async function appLoader() {
//   const data = await fetch("http://127.0.0.1:3000/getSession");
//   return data;
// }

// async function canvasAction(request, params) {}

const router = createBrowserRouter([
  {
    element: <NavBar />,
    // loader: appLoader,
    children: [
      {
        path: "/",
        element: <App></App>,
        // loader: appLoader,
      },
      {
        path: "/:difficulty",
        element: <Canvas></Canvas>,
        loader: difficultyLoader,
        // action: difficultyAction,
        id: "difficulty",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
