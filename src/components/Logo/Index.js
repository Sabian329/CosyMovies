import React from "react";
import styled from "styled-components";
import clap from "../../Asets/clap.png";
import { Colors } from "../../Theme/Colors";

export const Logo = () => (
  <LogoWrapper>
    <figure></figure>
  </LogoWrapper>
);

const LogoWrapper = styled.div`
  background-color: ${Colors.mainTheme1};
  position: absolute;
  bottom: 0;
  left: 0;
  figure {
    height: 5rem;
    width: 5rem;
    background-image: url(${clap});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
