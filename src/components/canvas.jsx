import { useLoaderData, useParams, useSubmit } from "react-router-dom";
import styles from "./canvas.module.css";
import { useEffect, useState } from "react";
import checkSolution from "../api/checkSolution";
import WaldoFound from "./waldoFound";
export default function Canvas() {
  const [modalStyle, setModalStyle] = useState({ display: "none" });
  const [isFound, setIsFound] = useState(null);
  const params = useParams();

  const handleOnClick = (Event) => {
    checkSolution(Event, params, setIsFound);
    console.log(isFound);
    setModalStyle({
      display: "block",
      position: "absolute",
      top: Event.clientY + "px",
      left: Event.clientX + "px",
    });
  };
  if (params.difficulty === "Easy") {
    return (
      <div className={styles.mainContainer}>
        <WaldoFound isFound={isFound} modalStyle={modalStyle}></WaldoFound>
        <picture className={styles.waldo} onClick={handleOnClick}>
          <source
            srcSet="assets\easy\where_is_waldo_easy_wide.jpg"
            media="(min-width:500px)"
          />
          <source
            srcSet="assets\easy\where_is_waldo_easy_mobile.jpg"
            media="(min-width:100px)"
          />
          <img src="assets\easy\where_is_waldo_easy_wide.jpg" alt="" />
        </picture>
      </div>
    );
  }
  if (params.difficulty === "Medium") {
    return (
      <div className={styles.mainContainer}>
        <WaldoFound isFound={isFound} modalStyle={modalStyle}></WaldoFound>

        <picture className={styles.waldo} onClick={handleOnClick}>
          <source
            srcSet="assets\medium\where_is_waldo_medium_wide.jpg"
            media="(min-width:500px)"
          />
          <source
            srcSet="assets\medium\where_is_waldo_medium_mobile.jpg"
            media="(min-width:100px)"
          />
          <img src="assets\medium\where_is_waldo_medium_wide.jpg" alt="" />
        </picture>
      </div>
    );
  }
  if (params.difficulty === "Hard") {
    return (
      <div className={styles.mainContainer}>
        <WaldoFound isFound={isFound} modalStyle={modalStyle}></WaldoFound>

        <img
          onClick={handleOnClick}
          src="assets\hard\where_is_waldo_hard_allScreens.jpg"
          alt=""
        />
      </div>
    );
  }
}
