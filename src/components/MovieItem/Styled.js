import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { Sizing } from "../../Theme/Sizing";
import { device } from "../../Theme/MediaQueries";
import { Margins } from "../../Theme/Sizing";

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-block;
  border-radius: 26px;
  height: ${Sizing.mainBoxHeight};
  width: ${Sizing.mainBoxWidth};
  margin: ${Margins.Box};

  -webkit-box-shadow: 5px 5px 20px ${Colors.shadow};
  box-shadow: 5px 5px 20px ${Colors.shadow};
  overflow-y: hidden;
  @media ${device.tablet} {
    width: ${Sizing.mobileBoxWidth};
    height: ${Sizing.mobileBoxHeight};
    margin: ${Margins.MobileBox};
  }
  img {
    border-radius: 15px 15px 0 0;
    height: ${Sizing.mainImageHeight};
    width: ${Sizing.mainBoxWidth};

    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0, black),
      color-stop(0.35, black),
      color-stop(0.5, black),
      color-stop(0.65, black),
      color-stop(0.85, rgba(0, 0, 0, 0.6)),
      color-stop(1, rgba(0, 0, 0, 0))
    );
    @media ${device.tablet} {
      height: ${Sizing.mobileImageHeight};
      width: ${Sizing.mobileBoxWidth};
    }
  }
`;

export const CircularProgressWrapper = styled.div`
  top: 0;
  right: 0;
  backdrop-filter: blur(100px);
  border-radius: 50%;
  width: max-content;
  position: absolute;
`;
