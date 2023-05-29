import { useEffect, useState } from "react";

export const MAX_WHEEL = 4000;

const useWheel = (): [number, boolean] => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(true);
  useEffect(() => {
    const handleWheel = (e: any) => {
      setIndex((prev) => {
        if (prev + e.deltaY > 0 && prev + e.deltaY < MAX_WHEEL)
          return prev + e.deltaY;
        else if (prev + e.deltaY >= MAX_WHEEL) return MAX_WHEEL;
        else return 0;
      });
      setDirection(e.deltaY >= 0);
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return [index, direction];
};

export default useWheel;
