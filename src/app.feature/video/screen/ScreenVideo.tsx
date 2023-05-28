import { useEffect, useRef } from "react";
import styled from "styled-components";
import useScroll from "../../../app.module/hooks/useScroll";

const ScreenVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollY = useScroll();

  useEffect(() => {
    const video = videoRef.current as HTMLVideoElement;

    if (scrollY > 200) {
      video.play();
    } else {
      video.pause();
    }
  }, [scrollY]);

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
