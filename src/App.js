import { useEffect, useState } from "react";
import "./styles.css";
import breakPointObserver from "./components/shared/breakPointObserver";

const breakPoints = {
  mobile: "(max-width:600px)",
  tablet: "(min-width:600px) and (max-width:768px)",
  laptop: "(min-width:769px) and (max-width:1024px)",
  desktop: "(min-width:1024px)"
};

export default function App() {
  const [breakPoint, isBreakPoint] = useState();
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);
  console.log(breakPoint);
  return (
    <div className="App">
      {breakPoint === "mobile" ? (
        <h1> mobile </h1>
      ) : breakPoint === "tablet" ? (
        <h1>Tablet</h1>
      ) : breakPoint === "laptop" ? (
        <h1>Laptop</h1>
      ) : breakPoint === "desktop" ? (
        <h1>Desktop</h1>
      ) : (
        ""
      )}
      <h1>Hello react</h1>
    </div>
  );
}
