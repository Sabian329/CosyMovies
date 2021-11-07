import styled from "styled-components";
import { Colors } from "../../Theme/Colors";

export const Wrapper = styled.section`
  background-color: ${Colors.mainTheme1};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 20rem;
    animation: rotate 2s infinite;
    @keyframes rotate {
      0% {
        transform: perspective(210px) rotateX(0) rotateY(0deg);
      }
      25% {
        transform: perspective(210px) rotateX(0) rotateY(10deg);
      }
      50% {
        transform: perspective(210px) rotateX(0) rotateY(-10deg);
      }
      75% {
        transform: perspective(210px) rotateX(0) rotateY(10deg);
      }
      100% {
        transform: perspective(210px) rotateX(0) rotateY(0deg);
      }
    }
  }
`;
