import { useState } from "react";
import styles from "./mainMenu.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
export default function MainMenu() {
  const fetchData = useLoaderData();
  console.log(fetchData);
  const [play, setPlay] = useState(false);
  return play ? (
    <div className={styles.mainMenu}>
      <h1>Where&apos;s Waldo?</h1>
      <h2>Select Difficulty</h2>
      <div className={styles.difSelect}>
        <Link to={"Easy"}>Easy</Link>
        <Link to={"/Medium"}>Medium</Link>
        <Link to={"/Hard"}>Hard</Link>
      </div>
    </div>
  ) : (
    <div className={styles.mainMenu}>
      <h1>Where&apos;s Waldo?</h1>
      <button onClick={() => setPlay(!play)} className={styles.playButton}>
        Play
      </button>
    </div>
  );
}
