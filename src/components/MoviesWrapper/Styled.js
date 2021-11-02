import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: max-content;
`;
export const MainWrapper = styled.div`
  height: 30rem;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: black;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: black;
  }
  ::-webkit-scrollbar-track {
    border-radius: 5px;
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
