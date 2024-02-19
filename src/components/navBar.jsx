import { useState } from "react";
import styles from "./navBar.module.css";
import { Link, Outlet, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
export default function NavBar() {
  const fetchData = useLoaderData();
  console.log(fetchData);
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
