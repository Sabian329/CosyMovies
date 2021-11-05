import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { device } from "../../Theme/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  button {
    margin: 0 0.1rem 0 0.1rem;
    padding: 0;
    background-color: ${Colors.mainTheme1};
    border-radius: 50%;
    @media ${device.tablet} {
      margin: 0.5rem;
    }
  }
`;

export const CenterBtns = styled.div`
  button {
    background-color: #a6362e;
  }
`;
