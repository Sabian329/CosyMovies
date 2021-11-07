import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { device } from "../../Theme/MediaQueries";

export const Wrapper = styled.div`
  background-color: ${Colors.mainTheme};
  display: flex;
  align-items: center;
  height: max-content;
  @media ${device.tablet} {
    justify-content: center;
    padding: 1rem 0 2rem 0;
  }

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
