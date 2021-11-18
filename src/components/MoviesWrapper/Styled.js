import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { Sizing } from "../../Theme/Sizing";
import { device, size } from "../../Theme/MediaQueries";
export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.mainTheme};
  overflow: hidden;
  @media ${device.tablet} {
    align-items: center;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  width: max-content;
  cursor: pointer;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${Sizing.mainBoxWrapperHeight};
  width: 100vw;
  overflow-y: hidden;
  overflow-x: scroll;
  background-color: ${Colors.mainTheme};
  scroll-behavior: smooth;
  max-width: ${size.laptopL};
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
    background: ${Colors.red};
    border-radius: 10px;
    padding 1rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const NameBtn = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  @media ${device.tablet} {
    position: unset;
    height: 4rem;
    padding-top: 0.5rem;
  }
`;
export const NameBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 5rem;
  width: 100%;
  @media ${device.tablet} {
    height: 4rem;
  }
`;
