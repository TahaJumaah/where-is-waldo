import styles from "./navBar.module.css";
import { Link, Outlet, useParams } from "react-router-dom";
import Timer from "./Timer";
export default function NavBar() {
  const params = useParams();

  if (params.difficulty !== undefined) {
    return (
      <>
        <nav className={styles.navContainer}>
          <Link to={"/"} className={styles.logo}>
            ?
          </Link>
          <Link className={styles.backButton} to={"/"}>
            &#60; Back
          </Link>
          <div className={styles.navTimer}>{<Timer />}</div>
        </nav>
        <Outlet></Outlet>
      </>
    );
  }
  return (
    <>
      <nav className={styles.navContainer}>
        <Link to={"/"} className={styles.logo}>
          ?
        </Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
