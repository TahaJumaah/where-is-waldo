import { useEffect, useRef, useState } from "react";
import { DateTime, Interval, Duration } from "luxon";
import styles from "./navBar.module.css";
import { useParams } from "react-router-dom";
export default function Timer() {
  const params = useParams();
  const [gameTimer, setGameTimer] = useState(null);
  const serverStartTime = useRef(null);
  useEffect(() => {
    const getSession = async () => {
      const server = "https://where-is-waldo-server-production.up.railway.app";
      const res = await fetch(
        `https://where-is-waldo-server-production.up.railway.app/getSession`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      serverStartTime.current = DateTime.fromISO(data.startTime);
      console.log(data);
      return data;
    };
    getSession();

    const interval = setInterval(() => {
      const generalDiff = DateTime.now()
        .diff(serverStartTime.current, ["minutes", "seconds"])
        .toObject();
      setGameTimer({
        minutes: generalDiff.minutes,
        seconds: generalDiff.seconds,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (gameTimer) {
    return (
      <div>
        {gameTimer.minutes}:{gameTimer.seconds}
      </div>
    );
  } else {
    return null;
  }
}
