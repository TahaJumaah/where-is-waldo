import { useState, useEffect } from "react";
import styles from "./mainMenu.module.css";
import { Link } from "react-router-dom";
export default function MainMenu() {
  useEffect(() => {
    async function startSession() {
      const server = "https://longhaired-brawny-scooter.glitch.me";
      const res = await fetch(`${server}/startSession`, {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      return data;
    }
    startSession();
  }, []);
  const [play, setPlay] = useState(false);
  return play ? (
    <div className={styles.mainMenu}>
      <h1>Where&apos;s Waldo?</h1>
      <h2>Select Difficulty</h2>
      <div className={styles.difSelect}>
        <Link to={"/Easy"}>Easy</Link>
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
