import styled from "styled-components";
import { device } from "../../Theme/MediaQueries";

export const MainWrapper = styled.div`
  padding: 01rem;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 1000;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 50vh;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 50vw;
  height: 80vh;
  background-color: black;
  position: fixed;
  border-radius: 26px;
  z-index: 100;
  cursor: default;
  overflow: hidden;
  @media ${device.tablet} {
    width: 75vw;
    height: 90vh;
  }
`;
