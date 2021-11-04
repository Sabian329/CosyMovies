import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${Colors.mainTheme};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: max-content;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40rem;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: ${Colors.mainTheme};
  ::-webkit-scrollbar {
    background-color: #0000;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    height: 5px;
    background-color: ${Colors.mainTheme};
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 5px grey;
    background: red;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  button {
    margin: 0 1rem 01rem;
  }
`;
