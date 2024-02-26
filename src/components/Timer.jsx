import { useEffect, useRef, useState } from "react";
import { DateTime, Interval, Duration } from "luxon";
export default function Timer() {
  const [gameTimer, setGameTimer] = useState(null);
  useEffect(() => {
    const getSession = async () => {
      const res = await fetch("http://127.0.0.1:3000/getSession", {
        credentials: "include",
      });
      const data = await res.json();
      setGameTimer(data.startTime);
      return data;
    };
    getSession();

    const interval = setInterval(() => {
      const dur = Interval.fromDateTimes(
        DateTime.fromISO(gameTimer),
        DateTime.now()
      );
      console.log(dur);
      setGameTimer("fromINTERVAL");
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>Timer: {gameTimer}</p>
    </>
  );
}
