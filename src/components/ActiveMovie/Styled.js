import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { Margins, Sizing } from "../../Theme/Sizing";
import { device } from "../../Theme/MediaQueries";

export const Wrapper = styled.div`
  background-color: black;
  position: relative;
  border-radius: 26px;
  height: ${Sizing.mainBoxHeight};
  width: ${Sizing.mainBoxWidth};
  margin: ${Margins.Box};
  -webkit-box-shadow: 5px 5px 20px ${Colors.shadow};
  box-shadow: 5px 5px 20px ${Colors.shadow};
  padding-top: 0.5rem;
  @media ${device.tablet} {
    width: ${Sizing.mobileBoxWidth};
    height: ${Sizing.mobileBoxHeight};
    margin: ${Margins.MobileBox};
  }

  p {
    color: white;
    margin: 1rem;
    font-size: 0.9rem;
  }
`;
export const MoviePoster = styled.img`
  position: absolute;
  bottom: 0;
  height: 12rem;
  border-radius: 0 0 26px 26px;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.8, black),
    color-stop(0.2, black),
    color-stop(0.4, black),
    color-stop(0, rgba(0, 0, 0, 0.6)),
    color-stop(0, rgba(0, 0, 0, 0))
  );
  @media ${device.tablet} {
    height: ${Sizing.mobileSmallImageHeight};
  }
`;

export const OverviewWrapper = styled.div`
  height: ${Sizing.overviewHeight};
  overflow-y: scroll;

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
