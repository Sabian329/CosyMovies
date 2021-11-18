import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { Margins, Sizing } from "../../Theme/Sizing";
import { device } from "../../Theme/MediaQueries";

export const Wrapper = styled.div`
  background-color: ${Colors.mainTheme};
  background-color: black;
  border-radius: 26px;
  height: ${Sizing.mainBoxHeight};
  width: ${Sizing.mainBoxWidth};
  margin: ${Margins.Box};
  -webkit-box-shadow: 5px 5px 20px ${Colors.shadow};
  box-shadow: 5px 5px 20px ${Colors.shadow};

  @media ${device.tablet} {
    width: ${Sizing.mobileBoxWidth};
    height: ${Sizing.mobileBoxHeight};
    margin: ${Margins.MobileBox};
  }

  p {
    color: white;
    margin: 1rem;
    font-size: 0.9rem;
    @media ${device.tablet} {
      font-size: 0.7rem;
    }
  }
`;
export const ImgSec = styled.div`
  position: relative;
  p {
    color: wheat;
    font-size: 0.7rem;
    margin: 0;
    @media ${device.tablet} {
      font-size: 0.5rem;
      color: #ffff;
    }
  }
  h2 {
    margin-bottom: 0.2rem;
    color: wheat;
    font-weight: 500;
    font-size: 1.5rem;
    @media ${device.tablet} {
      font-size: 0.7rem;
      padding: 0 0.5rem 0 0;
    }
  }
  button {
    position: absolute;
    z-index: 100;
    top: 0;
    right: 0;
    margin: 0.5rem;
  }
`;
export const HeaderRelease = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  z-index: 100;
  margin: 0 0 1.5rem 1rem;
`;
export const MoviePoster = styled.img`
  top: 0;
  height: 12rem;
  border-radius: 26px 26px 0 0;
  -webkit-mask-image: linear-gradient(to top, transparent 1%, black 50%);
  mask-image: linear-gradient(to top, transparent 1%, black 50%);
  @media ${device.tablet} {
    height: ${Sizing.mobileSmallImageHeight};
  }
`;

export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${Sizing.overviewHeight};

  @media ${device.tablet} {
    height: ${Sizing.mobileoverviewHeight};
  }
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
`;
export const ButtonMore = styled.div`
  z-index: 100;

  width: 100%;
  button {
    background-color: wheat;
    padding: 0.2rem 1rem 0.2rem 1rem;
    border-radius: 5px;
    color: #000000;
    border: none;
    font-weight: 500;
    font-size: 0.9rem;
    margin: 1.4rem 0 0 0.6rem;

    :hover {
      background-color: ${Colors.mainTheme1};
    }
    @media ${device.tablet} {
      width: 7rem;
      padding: 0.5rem 1rem 0.2rem 0.5rem;
      margin: 0.8rem 0 0 1.2rem;
    }
  }
`;
