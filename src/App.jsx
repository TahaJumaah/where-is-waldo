import NavBar from "./components/navBar";
import { Outlet } from "react-router-dom";
import { useFetcher, useLoaderData } from "react-router-dom";
import MainMenu from "./components/mainMenu";
export default function App() {
  return (
    <>
      <MainMenu></MainMenu>
      <Outlet></Outlet>
    </>
  );
}
