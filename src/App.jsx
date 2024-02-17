import { createContext, useState } from "react";
import styles from "./App.module.css";
import MainMenu from "./components/mainMenu";
import Canvas from "./components/canvas";
import NavBar from "./components/navBar";
import { Outlet } from "react-router-dom";
export default function App() {
  function handleDifficultyOnClick(Event) {
    console.log(Event.target.id);
    setDifficulty(event.target.id);
  }

  const [difficulty, setDifficulty] = useState(null);
  return (
    <>
      {/* <NavBar difficulty={difficulty}></NavBar> */}
      <MainMenu handleDifficultyOnClick={handleDifficultyOnClick}></MainMenu>
    </>
  );
}
