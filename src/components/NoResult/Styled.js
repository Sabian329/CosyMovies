import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import projector from "../../Asets/projector3.png";

export const Wrapper = styled.section`
  width: 100vw;
  height: 95vh;
  background-color: ${Colors.mainTheme};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  p {
    color: #ffff;
  }
`;

export const ImageWrapper = styled.div`
  width: 20rem;
  height: 30rem;

  background-image: url(${projector});
  background-size: contain;
  background-repeat: no-repeat;
`;
