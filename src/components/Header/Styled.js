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
  position: relative;
  @media ${device.tablet} {
    justify-content: center;
    flex-direction: column-reverse;
    height: max-content;
    padding: 1rem;
  }
  img {
    width: 14rem;
    position: absolute;
    right: 1rem;

    border-radius: 10px;
    padding: 0.5rem;
    @media ${device.tablet} {
      position: unset;
      background-color: ${Colors.body};
      margin: 0 0 1rem 0;
    }
  }
`;
