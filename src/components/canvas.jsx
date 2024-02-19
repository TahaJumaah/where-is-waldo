import { useParams } from "react-router-dom";
import styles from "./canvas.module.css";
import { useEffect, useState } from "react";

export default function Canvas() {
  const [pointer, setPointer] = useState(
    new Object({
      xCoordinate: null,
      yCoordinate: null,
    })
  );

  function handleCanvasClick(Event) {
    const imgH = Event.target.height;
    const imgW = Event.target.width;
    const offsetX = Event.nativeEvent.offsetX;
    const offsetY = Event.nativeEvent.offsetY;
    const percentX = (offsetX / imgW) * 100;
    const percentY = (offsetY / imgH) * 100;
    console.log(percentX, percentY);
  }
  const params = useParams();
  if (params.difficulty === "Easy") {
    return (
      <div className={styles.mainContainer}>
        <picture className={styles.waldo} onClick={handleCanvasClick}>
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
        <picture className={styles.waldo} onClick={handleCanvasClick}>
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
        <img src="assets\hard\where_is_waldo_hard_allScreens.jpg" alt="" />
      </div>
    );
  }
}
