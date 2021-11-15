import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { direct } from "./Index";

export const BtnRight = styled.button`
  position: absolute;
  top: 20rem;
  right: 0;
  z-index: 100;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 1rem;
  backdrop-filter: blur(30px);

  :hover {
    path {
      color: red;
    }
  }
`;
export const BtnLeft = styled.button`
  position: absolute;
  top: 20rem;
  left: 0;
  z-index: 100;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 1rem;
  backdrop-filter: blur(30px);

  :hover {
    path {
      color: red;
    }
  }
`;
