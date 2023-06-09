import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (e: any) => {
      e.preventDefault();
      console.log(11123);
      setScrollY(window.scrollY);
    };

    const handleWheel = () => {
      console.log("wheel");
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};

export default useScroll;
