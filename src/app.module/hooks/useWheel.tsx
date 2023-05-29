import { useEffect, useState } from "react";

const useWheel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleWheel = () => {
      console.log("wheel");
      setIndex((prev) => prev + 1);
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return index;
};

export default useWheel;
