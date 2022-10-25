const matchMediaQuery = (breakPoints, setBreakpoint) => {
  for (var key of Object.keys(breakPoints)) {
    if (window.matchMedia(`${breakPoints[key]}`).matches) {
      console.log(key, "--->", breakPoints[key]);
      setBreakpoint(key);
    }
  }
};

export default function breakPointObserver(breakPoints, setBreakpoint) {
  matchMediaQuery(breakPoints, setBreakpoint);
  window.addEventListener("resize", () => {
    matchMediaQuery(breakPoints, setBreakpoint);
  });
}
