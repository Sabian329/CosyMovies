import styled from "styled-components";
import { Colors } from "../../Theme/Colors";

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${Colors.mainTheme};
  overflow: hidden;
  min-height: 100vh;
`;
