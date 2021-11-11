import styled from "styled-components";
import { Colors } from "../../Theme/Colors";

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
  backdrop-filter: blur(2px);
  z-index: 1000;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  top: 50vh;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 50vw;
  height: 80vh;
  background-color: ${Colors.mainTheme1};
  position: fixed;
  border-radius: 26px;
  z-index: 100;
  overflow-y: scroll;
  @media only screen and (max-width: 550px) {
    width: 65vw;
    height: 65vh;
  }
`;
