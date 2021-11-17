import { Heading } from "@chakra-ui/layout";
import React from "react";
import { FooterWrapper, SocialWrapper } from "./Styled";
import fbLogo from "../../Asets/fb-logo2.png";
import inLogo from "../../Asets/linkedin-logo.png";
import gitLogo from "../../Asets/github-logo.png";

export const Footer = () => {
  return (
    <FooterWrapper>
      <SocialWrapper>
        <a href="https://github.com/Sabian329" target="_blank" rel="noreferrer">
          <img src={gitLogo} alt="social media logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/sabian-w%C4%99gli%C5%84ski-7299a0225/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={inLogo} alt="social media logo" />
        </a>
        <a
          href="https://www.facebook.com/sabian.weglinski"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fbLogo} alt="social media logo" />
        </a>
      </SocialWrapper>
      <Heading fontWeight="light">
        {"made by "}
        <em>Sabian Węgliński</em>
      </Heading>
    </FooterWrapper>
  );
};
