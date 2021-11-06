import styled from "styled-components";
import { Colors } from "../../Theme/Colors";

export const Wrapper = styled.div`
  background-color: ${Colors.mainTheme};
  display: flex;
  align-items: center;
  input {
    color: #ffff;
    width: 10rem;
  }
  button {
    background-color: ${Colors.mainTheme1};
  }
`;
export const IconWrapper = styled.div`
  bottom: 0;
  left: 0;
`;
