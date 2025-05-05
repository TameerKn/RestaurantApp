import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const updateStates = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateStates);

    return () => window.removeEventListener("resize", updateStates);
  }, []);

  return { width, height };
}