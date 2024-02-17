import styles from "./mainMenu.module.css";
import { Link } from "react-router-dom";
export default function MainMenu({
  isActive,
  setIsActive,
  handleDifficultyOnClick,
}) {
  return (
    <div className={styles.mainMenu}>
      <h1>Where&apos;s Waldo?</h1>
      <h2>Select Difficulty</h2>
      <div className={styles.difSelect}>
        <Link to={"Easy"}>Easy</Link>
        <Link to={"/Medium"}>Medium</Link>
        <Link to={"/Hard"}>Hard</Link>
      </div>
    </div>
  );
}
