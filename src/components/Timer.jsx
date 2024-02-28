import { useEffect, useRef, useState } from "react";
import { DateTime, Interval, Duration } from "luxon";
import styles from "./navBar.module.css";
export default function Timer() {
  const [gameTimer, setGameTimer] = useState(null);
  const serverStartTime = useRef(null);
  useEffect(() => {
    const getSession = async () => {
      const server = import.meta.env.VITE_server;

      const res = await fetch(`${server}/getSession`, {
        credentials: "include",
      });
      const data = await res.json();
      serverStartTime.current = DateTime.fromISO(data.startTime);
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
