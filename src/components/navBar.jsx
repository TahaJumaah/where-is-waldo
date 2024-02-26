import { useState, useEffect } from "react";
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
            WW?
          </Link>
          <Link className={styles.backButton} to={"/"}>
            Back
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
          WW?
        </Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
