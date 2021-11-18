import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { size } from "../../Theme/MediaQueries";

export const Wrapper = styled.section`
  background-color: ${Colors.mainTheme};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 10rem;
  height: max-content;
  min-height: 100vh;
  max-width: ${size.laptopL};
  div {
    cursor: pointer;
  }
`;
