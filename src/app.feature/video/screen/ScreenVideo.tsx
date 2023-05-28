import styled from "styled-components";

const ScreenVideo = () => {
  return (
    <StyledWrapper>
      <video autoPlay loop muted>
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
