import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { device } from "../../Theme/MediaQueries";

export const Wrapper = styled.header`
  width: 100vw;
  height: 5rem;
  background-color: ${Colors.mainTheme1};
  display: flex;
  align-items: center;
  max-width: 1920px;
  @media ${device.tablet} {
    justify-content: center;
  }
`;
