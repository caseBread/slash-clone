import { useEffect, useRef } from "react";
import styled from "styled-components";
import useScroll from "../../../app.module/hooks/useScroll";
import useWheel, { MAX_WHEEL } from "../../../app.module/hooks/useWheel";

const ScreenVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollY = useScroll();
  const [wheelCount, direction, isVideoEnd] = useWheel();

  useEffect(() => {
    if (scrollY === 0) document.body.style.overflow = "hidden";
  }, [scrollY]);

  useEffect(() => {
    if (isVideoEnd) document.body.style.overflow = "visible";
  }, [isVideoEnd]);

  useEffect(() => {
    // 이게 동영상 시작 조건
    if (scrollY === 0) {
      const video = videoRef.current as HTMLVideoElement;
      video.currentTime = (wheelCount / MAX_WHEEL) * 4;
    }
  }, [wheelCount, scrollY]);

  return (
    <StyledWrapper>
      <video ref={videoRef} muted>
        <source src="/videos/slash23.mp4" type="video/mp4" />
      </video>
    </StyledWrapper>
  );
};

export default ScreenVideo;

const StyledWrapper = styled.div`
  video {
    width: 100vw;
  }
`;
