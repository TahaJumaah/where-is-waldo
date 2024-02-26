import { useLoaderData, useParams, useSubmit } from "react-router-dom";
import styles from "./canvas.module.css";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

export default function Canvas() {
  const [data, setData] = useState(null);
  const params = useParams();
  const loaderData = useLoaderData();
  console.log(loaderData);

  const handleOnClick = async (Event) => {
    try {
      const imgH = Event.target.height;
      const imgW = Event.target.width;
      const offsetX = Event.nativeEvent.offsetX;
      const offsetY = Event.nativeEvent.offsetY;
      const percentX = (offsetX / imgW) * 100;
      const percentY = (offsetY / imgH) * 100;
      console.log(percentX, percentY);
      const response = await fetch(
        `http://127.0.0.1:3000/api/${params.difficulty}/check`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ solX: percentX, solY: percentY }),
        }
      );
      const resData = await response.json();
      setData(resData);
      console.log("data");
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };
  if (params.difficulty === "Easy") {
    return (
      <div className={styles.mainContainer}>
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
        <img
          onClick={handleOnClick}
          src="assets\hard\where_is_waldo_hard_allScreens.jpg"
          alt=""
        />
      </div>
    );
  }
}
