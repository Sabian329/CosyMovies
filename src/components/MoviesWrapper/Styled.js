import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { Sizing } from "../../Theme/Sizing";
import { device } from "../../Theme/MediaQueries";
export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.mainTheme};
  @media ${device.tablet} {
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: max-content;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${Sizing.mainBoxWrapperHeight};
  width: 100vw;
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: ${Colors.mainTheme};
  @media ${device.tablet} {
    height: ${Sizing.mobileScrollBoxWrapperHeight};
  }
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
  margin: 1rem;
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.1rem;
  }
`;
