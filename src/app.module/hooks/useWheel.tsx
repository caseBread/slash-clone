import { useEffect, useState } from "react";

export const MAX_WHEEL = 4000;

const useWheel = (): [number, boolean, boolean] => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      setIndex((prev) => {
        if (prev + e.deltaY > 0 && prev + e.deltaY < MAX_WHEEL) {
          setIsEnd(false);
          return prev + e.deltaY;
        } else if (prev + e.deltaY >= MAX_WHEEL) {
          setIsEnd(true);
          return MAX_WHEEL;
        } else return 0;
      });
      setDirection(e.deltaY >= 0);
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return [index, direction, isEnd];
};

export default useWheel;
