import { useParams } from "react-router-dom";

export default async function checkSolution(Event, params, setIsFound) {
  const device = "mobile";
  const server = "https://where-is-waldo-server-production.up.railway.app";
  try {
    const imgH = Event.target.height;
    const imgW = Event.target.width;
    const offsetX = Event.nativeEvent.offsetX;
    const offsetY = Event.nativeEvent.offsetY;
    const percentX = (offsetX / imgW) * 100;
    const percentY = (offsetY / imgH) * 100;
    const response = await fetch(`${server}/api/${params.difficulty}/check`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ solX: percentX, solY: percentY, device }),
      credentials: "include",
    });
    const resData = await response.json();
    setIsFound(resData.waldoFound);
  } catch (error) {
    setIsFound(null);
  }
}
