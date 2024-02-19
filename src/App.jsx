import { useState, useEffect } from "react";
import MainMenu from "./components/mainMenu";
import { useLoaderData } from "react-router-dom";
export default function App() {
  function handleDifficultyOnClick(Event) {
    console.log(Event.target.id);
    setDifficulty(event.target.id);
  }
  const fetchData = useLoaderData();
  console.log(fetchData);

  const [difficulty, setDifficulty] = useState(null);
  return (
    <>
      <button
        onClick={() => {
          console.log(fetchData);
        }}
      >
        FETCH
      </button>
      <MainMenu handleDifficultyOnClick={handleDifficultyOnClick}></MainMenu>
    </>
  );
}
