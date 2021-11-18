import { Heading } from "@chakra-ui/layout";
import React from "react";
import { FooterWrapper, MDB, SocialWrapper } from "./Styled";
import fbLogo from "../../Assets/fb.png";
import inLogo from "../../Assets/linked.png";
import gitLogo from "../../Assets/git.png";
import tmdb from "../../Assets/tmdb.svg";

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
      <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
        <MDB src={tmdb} alt="the movie db logo" />
      </a>
    </FooterWrapper>
  );
};
