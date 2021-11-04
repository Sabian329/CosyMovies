import styled from "styled-components";
import { Colors } from "../../Theme/Colors";

export const Wrapper = styled.div`
  position: relative;
  border-radius: 26px 0 0 26px;
  height: 36rem;
  width: 20rem;
  margin: 0 1rem 0 1rem;
  -webkit-box-shadow: 5px 5px 20px ${Colors.shadow};
  box-shadow: 5px 5px 20px ${Colors.shadow};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: #0000;
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    height: 15px;
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
  p {
    color: white;
    margin: 1rem;
    font-size: 0.9rem;
  }
`;
export const MoviePoster = styled.img``;
