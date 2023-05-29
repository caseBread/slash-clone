import { useEffect, useRef } from "react";
import styled from "styled-components";
import useScroll from "../../../app.module/hooks/useScroll";
import useWheel, { MAX_WHEEL } from "../../../app.module/hooks/useWheel";

const ScreenVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollY = useScroll();
  const [wheelCount, direction] = useWheel();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const video = videoRef.current as HTMLVideoElement;
    video.currentTime = (wheelCount / MAX_WHEEL) * 4;
  }, [wheelCount]);

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
