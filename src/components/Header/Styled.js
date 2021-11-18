import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { device, size } from "../../Theme/MediaQueries";

export const Wrapper = styled.header`
  width: 100vw;
  height: 5rem;
  background-color: ${Colors.mainTheme1};
  background-color: black;
  display: flex;
  align-items: center;
  max-width: ${size.laptopL};
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
    filter: saturate(70%);
    cursor: pointer;
    :hover {
      filter: invert(50%);
    }
    @media ${device.tablet} {
      position: unset;
      margin: 0 0 1rem 0;
    }
  }
`;
