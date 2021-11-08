import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { device } from "../../Theme/MediaQueries";
import { InputSize } from "../../Theme/Sizing";

export const Wrapper = styled.header`
  width: 100vw;
  height: 5rem;
  background-color: ${Colors.mainTheme1};
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    justify-content: center;
  }
`;
