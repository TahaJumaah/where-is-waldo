import styles from "./canvas.module.css";
import { useState } from "react";

export default function Canvas() {
  const [pointer, setPointer] = useState(
    new Object({
      xCoordinate: null,
      yCoordinate: null,
    })
  );

  function handleCanvasClick(Event) {
    // setPointer({
    //   xCoordinate: Event.nativeEvent.offsetX,
    //   yCoordinate: Event.nativeEvent.offsetY,
    // });
    const imgH = Event.target.height;
    const imgW = Event.target.width;
    const offsetX = Event.nativeEvent.offsetX;
    const offsetY = Event.nativeEvent.offsetY;
    const percentX = (offsetX / imgW) * 100;
    const percentY = (offsetY / imgH) * 100;
    console.log(percentX, percentY);
  }
  return (
    <div className={styles.mainContainer}>
      <img
        onClick={handleCanvasClick}
        className={styles.waldo}
        src="assets\easy\where_is_waldo_easy_wide.jpg"
        alt="Image of people on a beach, including waldo to find"
      />
    </div>
  );
}
